import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  return v && v.trim().length > 0 ? v.trim() : undefined;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const host = getEnv("SMTP_HOST");
    const portStr = getEnv("SMTP_PORT");
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASS");
    const from = getEnv("SMTP_FROM") || user;
    const to = getEnv("SMTP_TO") || user;

    if (!host || !portStr || !user || !pass || !from || !to) {
      console.error("[contact] Config SMTP incomplète", {
        host,
        portStr,
        user,
        from,
        to,
      });
      return NextResponse.json(
        { ok: false, error: "Configuration SMTP manquante côté serveur." },
        { status: 500 }
      );
    }

    const port = Number(portStr) || 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Nouveau message depuis le site – ${name}`;

    const text = [
      `Nom : ${name}`,
      `Email : ${email}`,
      "",
      "Message :",
      message,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.redirect(new URL("/contact?sent=1", req.url));
  } catch (err) {
    console.error("[contact] Erreur d’envoi mail", err);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}
