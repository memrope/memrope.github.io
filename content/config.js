window.MemRoPEConfig = {
    // Define the methods to compare, their column details, and FPS.
    methods: [
        { id: "ll", title: "LongLive" },
        { id: "ir", title: "Infinite-RoPE" },
        { id: "df", title: "Deep Forcing" },
        { id: "ours", title: "Ours (MemRoPE)", highlight: true }
    ],

    // Define the sections for the video length comparisons.
    comparisons: [
        {
            duration: "30-Second Generation",
            badge: "30s",
            examples: [
                {
                    videos: {
                        ll: "content/Comparisons/30s/LongLive/109-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/30s/Infinite-RoPE/109-0_lora_2gpu.mp4",
                        df: "content/Comparisons/30s/DeepForcing/109-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/30s/Ours/109-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/30s/LongLive/116-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/30s/Infinite-RoPE/116-0_lora_2gpu.mp4",
                        df: "content/Comparisons/30s/DeepForcing/116-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/30s/Ours/116-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/30s/LongLive/119-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/30s/Infinite-RoPE/119-0_lora_2gpu.mp4",
                        df: "content/Comparisons/30s/DeepForcing/119-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/30s/Ours/119-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/30s/LongLive/123-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/30s/Infinite-RoPE/123-0_lora_2gpu.mp4",
                        df: "content/Comparisons/30s/DeepForcing/123-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/30s/Ours/123-0_lora_2gpu.mp4"
                    }
                }
            ]
        },
        {
            duration: "120-Second Generation",
            badge: "120s",
            examples: [
                {
                    videos: {
                        ll: "content/Comparisons/60s/LongLive/94-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/60s/Infinite-RoPE/94-0_lora_2gpu.mp4",
                        df: "content/Comparisons/60s/DeepForcing/94-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/60s/Ours/94-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/60s/LongLive/95-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/60s/Infinite-RoPE/95-0_lora_2gpu.mp4",
                        df: "content/Comparisons/60s/DeepForcing/95-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/60s/Ours/95-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/60s/LongLive/96-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/60s/Infinite-RoPE/96-0_lora_2gpu.mp4",
                        df: "content/Comparisons/60s/DeepForcing/96-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/60s/Ours/96-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/60s/LongLive/107-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/60s/Infinite-RoPE/107-0_lora_2gpu.mp4",
                        df: "content/Comparisons/60s/DeepForcing/107-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/60s/Ours/107-0_lora_2gpu.mp4"
                    }
                }
            ]
        },
        {
            duration: "240-Second Generation",
            badge: "240s",
            examples: [
                {
                    videos: {
                        ll: "content/Comparisons/120s/LongLive/67-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/120s/Infinite-RoPE/67-0_lora_2gpu.mp4",
                        df: "content/Comparisons/120s/DeepForcing/67-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/120s/Ours/67-0_lora_2gpu.mp4"
                    }
                },
                {
                    videos: {
                        ll: "content/Comparisons/120s/LongLive/74-0_lora_2gpu.mp4",
                        ir: "content/Comparisons/120s/Infinite-RoPE/74-0_lora_2gpu.mp4",
                        df: "content/Comparisons/120s/DeepForcing/74-0_lora_2gpu.mp4",
                        ours: "content/Comparisons/120s/Ours/74-0_lora_2gpu.mp4"
                    }
                }
            ]
        }
    ],

    // Define the ablation study comparisons (6 rows x 3 methods).
    ablations: [
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-14-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-14-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-14-0_lora.mp4"
            }
        },
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-15-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-15-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-15-0_lora.mp4"
            }
        },
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-16-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-16-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-16-0_lora.mp4"
            }
        },
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-17-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-17-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-17-0_lora.mp4"
            }
        },
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-18-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-18-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-18-0_lora.mp4"
            }
        },
        {
            videos: {
                long: "content/Ablation/LongOnly/rank0-19-0_lora.mp4",
                short: "content/Ablation/ShortOnly/rank0-19-0_lora.mp4",
                none: "content/Ablation/NoMem/rank0-19-0_lora.mp4"
            }
        }
    ],

    // Define the showcases (4 rows x 3 videos).
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
        }
    ]
};
