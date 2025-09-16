export const metadata = {
  title: 'Kairós Intelitech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        {children}

        {/* Confirmação visual de formulário enviado */}
        <div id="form-confirmation" className="hidden fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm z-50">
          Enviado com sucesso!
        </div>

        {/* Script para exibir a confirmação */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("DOMContentLoaded", function () {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get("success") === "true") {
                  const confirmation = document.getElementById("form-confirmation");
                  if (confirmation) {
                    confirmation.classList.remove("hidden");
                    setTimeout(() => {
                      confirmation.classList.add("hidden");
                    }, 5000);
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
