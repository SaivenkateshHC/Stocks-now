import { success } from "better-auth";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompt";

export const sendSignUpEmail = inngest.createFunction(
    { id: "send-sign-up-email" },
    { event: "app/user.created" },
    async ({ step, event }) => {
        const userProfile = `
            - Country: ${event.data.country}
            - Investment Goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred Industry: ${event.data.preferredIndustry}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace("{{userProfile}}", userProfile)

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: "gemini-2.0-flash-lite" }),
            body: {
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            }
        })

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0].content?.parts?.[0]
            const introText = (part && 'text' in part ? part.text : null) || "Thanks for joining Signalist!";

            // email sending logic
        })

        return {
            success: true,
            message: "Welcome email sent successfully",
        }
    }
)