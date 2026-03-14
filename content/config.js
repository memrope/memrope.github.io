window.MemRoPEConfig = {
    // Define the sections for comparisons, grouped by base model.
    comparisons: [
        {
            duration: "Results on SelfForcing",
            description: "Autoregressive causal video generation",
            badge: "120s",
            methods: [
                { id: "base", title: "SelfForcing" },
                { id: "df", title: "+ Deep Forcing" },
                { id: "ir", title: "+ \u221E-RoPE" },
                { id: "ours", title: "+ MemRoPE (Ours)", highlight: true }
            ],
            examples: [
                {
                    videos: {
                        base: "content/Comparisons/SelfForcing/Base/24-0_ema.mp4",
                        df: "content/Comparisons/SelfForcing/DeepForcing/24-0_regular_2gpu.mp4",
                        ir: "content/Comparisons/SelfForcing/InfRoPE/24-0_regular_2gpu.mp4",
                        ours: "content/Comparisons/SelfForcing/Ours/24-0_ema_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        base: "content/Comparisons/SelfForcing/Base/4-0_ema.mp4",
                        df: "content/Comparisons/SelfForcing/DeepForcing/4-0_regular_2gpu.mp4",
                        ir: "content/Comparisons/SelfForcing/InfRoPE/4-0_regular_2gpu.mp4",
                        ours: "content/Comparisons/SelfForcing/Ours/4-0_ema_2gpu.mp4"
                    }
                }
            ]
        },
        {
            duration: "Results on LongLive",
            description: "Long-video finetuned generation model",
            badge: "120s",
            methods: [
                { id: "base", title: "LongLive" },
                { id: "df", title: "+ Deep Forcing" },
                { id: "ir", title: "+ \u221E-RoPE" },
                { id: "ours", title: "+ MemRoPE (Ours)", highlight: true }
            ],
            examples: [
                {
                    videos: {
                        base: "content/Comparisons/LongLive/Base/32-0_lora_2gpu.mp4",
                        df: "content/Comparisons/LongLive/DeepForcing/32-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/LongLive/InfRoPE/32-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/LongLive/Ours/32-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        base: "content/Comparisons/LongLive/Base/53-0_lora_2gpu.mp4",
                        df: "content/Comparisons/LongLive/DeepForcing/53-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/LongLive/InfRoPE/53-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/LongLive/Ours/53-0_lora_2gpu.mp4"
                    }
                }
            ]
        }
    ],

    // Define the ablation study comparisons (1 row x 4 methods, 60s, LongLive base).
    ablations: [
        {
            videos: {
                none: "content/Ablation/NoMem/1-0_lora.mp4",
                long: "content/Ablation/LongOnly/1-0_lora.mp4",
                short: "content/Ablation/ShortOnly/1-0_lora.mp4",
                both: "content/Ablation/Both/1-0_lora.mp4"
            }
        },
        {
            videos: {
                none: "content/Ablation/NoMem/7-0_lora.mp4",
                long: "content/Ablation/LongOnly/7-0_lora.mp4",
                short: "content/Ablation/ShortOnly/7-0_lora.mp4",
                both: "content/Ablation/Both/7-0_lora.mp4"
            }
        }
    ],

    // Define the showcases (7 rows x 3 videos = 21 total).
    showcases: [
        {
            videos: [
                "content/Showcases/103-0_lora_2gpu.mp4",
                "content/Showcases/24-0_lora_2gpu.mp4",
                "content/Showcases/29-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/30-0_lora_2gpu.mp4",
                "content/Showcases/32-0_lora_2gpu.mp4",
                "content/Showcases/40-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/52-0_lora_2gpu.mp4",
                "content/Showcases/54-0_lora_2gpu.mp4",
                "content/Showcases/64-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/69-0_lora_2gpu.mp4",
                "content/Showcases/8-0_lora_2gpu.mp4",
                "content/Showcases/91-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/109-0_lora_2gpu.mp4",
                "content/Showcases/116-0_lora_2gpu.mp4",
                "content/Showcases/119-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/123-0_lora_2gpu.mp4",
                "content/Showcases/94-0_lora_2gpu.mp4",
                "content/Showcases/95-0_lora_2gpu.mp4"
            ]
        },
        {
            videos: [
                "content/Showcases/96-0_lora_2gpu.mp4",
                "content/Showcases/107-0_lora_2gpu.mp4",
                "content/Showcases/67-0_lora_2gpu.mp4"
            ]
        }
    ]
};
