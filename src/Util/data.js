import deer from '../assets/deer.jpg';
import seem from '../assets/seem.png';
import law from '../assets/physical_law.jpg';
import surgery from '../assets/surgery.jpg';
import vcr from '../assets/vcr.jpg';
import benchmark from '../assets/benchmark.jpg';
import odpr from '../assets/odpr.jpg';
import soccer_img from '../assets/soccer.jpg';

export const FULL_NAME = "Yu Chen / 陈煜 / Stan Chen";
export const RESUME_LINK = "#";
export const FOOTER_TEXT = {
    text: "Site source on ",
    link: "https://github.com/STAN-32",
    linkText: "GitHub"
};

export const SOCIAL_LINKS = [
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:chen-y22@mails.tsinghua.edu.cn",
        text: "chen-y22@mails.tsinghua.edu.cn",
        showText: true
    },
    {
        name: "Google Scholar",
        icon: "fas fa-graduation-cap",
        link: "https://scholar.google.com/citations?user=8ySqPzwAAAAJ&hl=zh-CN",
        showText: false
    },
    {
        name: "Github",
        icon: "fab fa-lg fa-github",
        link: "https://github.com/STAN-32",
        showText: false
    }
];

export const NEWS = [
    {
        date: "Aug 2025",
        content: "Released preprint: <b>A Semantic-Aware Framework for Safe and Intent-Integrative Assistance in Upper-Limb Exoskeletons</b>.",
    },
    {
        date: "2024",
        content: "Published papers in <b>IEEE Transactions on Robotics</b>, <b>IJRR</b>, and <b>ICRA</b>.",
    },
    {
        date: "2023",
        content: "Published work on exoskeleton perception and trajectory-tracking control at <b>ICRA</b> and <b>IROS</b>.",
    }
];

export const FEATUREDPUBLICATIONS = [
    {
        id: 1,
        name: "Learning to assist different wearers in multitasks: efficient and individualized human-in-the-loop adaptation framework for lower-limb exoskeleton",
        journal: "IEEE Transactions on Robotics",
        date: "Sep 2024",
        authors: "Y. Chen, S. Miao, G. Chen, J. Ye, C. Fu, B. Liang, S. Song, X. Li",
        image: law,
        link: "#"
    },
    {
        id: 2,
        name: "Upper-Limb Rehabilitation with a Dual-Mode Individualized Exoskeleton Robot: A Generative-Model-Based Solution",
        journal: "The International Journal of Robotics Research",
        date: "Oct 2024",
        authors: "Y. Chen, S. Miao, J. Ye, G. Chen, J. Cheng, K. Du, X. Li",
        image: deer,
        link: "#"
    },
    {
        id: 3,
        name: "Safe and individualized motion planning for upper-limb exoskeleton robots using human demonstration and interactive learning",
        journal: "IEEE International Conference on Robotics and Automation (ICRA)",
        date: "May 2024",
        authors: "Y. Chen, G. Chen, J. Ye, X. Qiu, X. Li",
        image: seem,
        link: "#"
    }
];

export const PUBLICATIONS = [
    {
        id: 1,
        name: "Learning to assist different wearers in multitasks: efficient and individualized human-in-the-loop adaptation framework for lower-limb exoskeleton",
        journal: "IEEE Transactions on Robotics",
        date: "Sep 2024",
        authors: "Y. Chen, S. Miao, G. Chen, J. Ye, C. Fu, B. Liang, S. Song, X. Li",
        image: law,
        link: "#"
    },
    {
        id: 2,
        name: "Upper-Limb Rehabilitation with a Dual-Mode Individualized Exoskeleton Robot: A Generative-Model-Based Solution",
        journal: "The International Journal of Robotics Research",
        date: "Oct 2024",
        authors: "Y. Chen, S. Miao, J. Ye, G. Chen, J. Cheng, K. Du, X. Li",
        image: deer,
        link: "#"
    },
    {
        id: 3,
        name: "Safe and individualized motion planning for upper-limb exoskeleton robots using human demonstration and interactive learning",
        journal: "IEEE International Conference on Robotics and Automation (ICRA)",
        date: "May 2024",
        authors: "Y. Chen, G. Chen, J. Ye, X. Qiu, X. Li",
        image: surgery,
        link: "#"
    },
    {
        id: 4,
        name: "Multi-modal learning and relaxation of physical conflict for an exoskeleton robot with proprioceptive perception",
        journal: "IEEE International Conference on Robotics and Automation (ICRA)",
        date: "May 2023",
        authors: "X. Zhang, Y. Shu, Y. Chen, G. Chen, J. Ye, X. Li, X. Li",
        image: seem,
        link: "#"
    },
    {
        id: 5,
        name: "Two-stage trajectory-tracking control of cable-driven upper-limb exoskeleton robots with series elastic actuators: A simple, accurate, and force-sensorless method",
        journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        date: "Sep 2023",
        authors: "Y. Shu, Y. Chen, X. Zhang, S. Zhang, G. Chen, J. Ye, X. Li",
        image: vcr,
        link: "#"
    },
    {
        id: 6,
        name: "Hierarchical learning and control for in-hand micromanipulation using multiple laser-driven micro-tools",
        journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        date: "Sep 2022",
        authors: "Y. Jia, Y. Chen, H. Liu, X. Li, X. Li",
        image: benchmark,
        link: "#"
    },
    {
        id: 7,
        name: "A Semantic-Aware Framework for Safe and Intent-Integrative Assistance in Upper-Limb Exoskeletons",
        journal: "arXiv preprint arXiv:2508.10378",
        date: "Aug 2025",
        authors: "Y. Chen, S. Miao, C. Wu, J. Mu, B. Ouyang, X. Li",
        image: odpr,
        link: "https://arxiv.org/abs/2508.10378"
    }
];

export const SERVICES = [
    {
        title: "Academic Services",
        description: "Conference reviewing and academic service details will be updated soon."
    },
    {
        title: "Research Talks",
        description: "Selected invited talks and presentations will be updated soon."
    },
    {
        title: "Open-Source and Community",
        description: "Related activities will be updated soon."
    }
];

export const ABOUT_TEXT = `
<p>I am a Ph.D. candidate at Tsinghua University. My research focuses on wearable robots and human-robot interaction.</p>
<p>My interests include:</p>
<ul>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Wearable Robots</span> for assistive and rehabilitation applications</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Human-Robot Interaction</span> for safe and intent-aware cooperation</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Human-in-the-loop Learning</span> for personalized exoskeleton adaptation</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Motion Planning and Control</span> for upper-limb and lower-limb exoskeleton systems</li>
</ul>
`;

export const LIFE_ACTIVITIES = [
    {
        id: 1,
        name: "Life Updates",
        description: "Personal activities and photos will be updated soon.",
        image: soccer_img
    }
];
