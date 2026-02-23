"use client";

import Script from "next/script";

export default function VapiWidget() {
    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/vapi-widget.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.vapiSDK) {
                    // @ts-ignore
                    window.vapiSDK.run({
                        apiKey: "pub-1858a4ab-1eb6-4ca3-99df-d1da31150892",
                        assistant: "c500ab0f-ea72-47fd-b66f-e2caf54a0ebf", // Stefan New
                        config: {
                            position: "bottom-right",
                            title: "Stefan - AI Concierge",
                            subtitle: "Austria Turismo 4.0",
                            color: "#ed2939"
                        },
                    });
                }
            }}
        />
    );
}
