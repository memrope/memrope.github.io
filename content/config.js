window.MemRoPEConfig = {
    // Define the methods to compare, their column details, and FPS.
    methods: [
        { id: "sf", title: "Self-Forcing", fps: "17.0" },
        { id: "sr", title: "SkyReels-V2", fps: "0.49" },
        { id: "ll", title: "LongLive", fps: "20.7" },
        { id: "ours", title: "Ours (MemRoPE)", fps: "19.5", highlight: true }
    ],

    // Define the sections for the video length comparisons.
    comparisons: [
        {
            duration: "30-Second Generation",
            badge: "30s",
            examples: [
                {
                    videos: {
                        sf: "", // Add mp4 URL strings here, e.g., "content/videos/30s_sf_1.mp4"
                        sr: "",
                        ll: "",
                        ours: ""
                    }
                },
                {
                    videos: {
                        sf: "",
                        sr: "",
                        ll: "",
                        ours: ""
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
                        sf: "",
                        sr: "",
                        ll: "",
                        ours: ""
                    }
                },
                {
                    videos: {
                        sf: "",
                        sr: "",
                        ll: "",
                        ours: ""
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
                        sf: "",
                        sr: "",
                        ll: "",
                        ours: ""
                    }
                },
                {
                    videos: {
                        sf: "",
                        sr: "",
                        ll: "",
                        ours: ""
                    }
                }
            ]
        }
    ]
};
