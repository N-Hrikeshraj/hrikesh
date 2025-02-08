import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'React Router'],
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1280',
    longDescription: 'A fully featured portfolio website showcasing modern web development practices, smooth animations, and responsive design. Built as a single-page application with seamless navigation and interactive elements.',
    challenge: 'Creating a smooth, performant scrolling experience with accurate section highlighting while maintaining engaging animations and transitions. The main challenge was implementing an intuitive navigation system that works seamlessly with both scroll events and direct navigation.',
    solution: 'Implemented a custom intersection observer system using Framer Motion\'s useInView hook to track visible sections. Combined with React Router for routing and Framer Motion for animations, the site achieves smooth transitions between sections while maintaining accurate navigation state. Tailwind CSS was used for responsive styling, ensuring a consistent look across all devices.',
    outcome: 'Created a highly performant, visually appealing portfolio website with smooth animations and intuitive navigation. The site achieves perfect Lighthouse scores for performance and accessibility, with optimized assets and semantic HTML structure.',
    /*link: 'https://example.com',
    github: 'https://github.com/example/personal-website'*/
  },
  {
    id: 'swarm-robotics',
    title: 'Swarm Robotics for Drone Control',
    description: 'Developed an innovative swarm of autonomous drones for search and rescue operations',
    skills: ['Solidworks', 'Linux', 'ROS2', 'Wireless Communication'],
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1280',
    longDescription: 'A comprehensive drone swarm project focused on developing modular, cost-effective drones capable of autonomous flight and inter-drone communication. The project implemented a sophisticated swarm network that enables efficient task distribution and information sharing between units.',
    challenge: 'Developing a fleet of drones within a strict budget constraint of $850. This required innovative frame design to minimize manufacturing and repair costs while maintaining functionality. Additionally, we needed to integrate low-cost off-the-shelf hardware and leverage open-source software solutions.',
    solution: 'We implemented a double diamond design process, splitting the project into drone design and swarm system design phases. This methodical approach allowed parallel development of the physical drones and their communication systems. The process involved extensive research, prototyping, and iterative development of both hardware and software components.',
    outcome: 'Successfully developed a swarm of drones capable of autonomous flight and inter-unit communication for search and rescue tasks. Performance testing showed the collaborative swarm was 15% faster in target acquisition compared to individual drones and 59.1% faster than non-collaborative drone pairs.',
    methodologyImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/double-diamond.png?raw=True',
    resultImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/swarm-system.png?raw=True',
    startDate: 'October 2023',
    duration: '6 months',
    status: 'Completed',
    projectGoals: [
      'Develop a modular drone design for easy testing, repairability, and upgradability',
      'Create a robust control system for autonomous flight, navigation, and obstacle avoidance',
      'Implement a swarm network for information sharing and task distribution'
    ],
    techStack: {
      tools: ['Solidworks', 'Linux', 'Wireless Communication', 'ROS2'],
      approach: [
        'Agile methodology',
        'Test-driven development',
        'Continuous integration'
      ]
    },
    performanceMetrics: [
      {
        value: '15%',
        label: 'Faster than Individual Drone',
        description: 'Improved target acquisition speed compared to single drone operation'
      },
      {
        value: '59.1%',
        label: 'Faster than Non-collaborative Pair',
        description: 'Enhanced performance over non-communicating drone pairs'
      },
      {
        value: '$850',
        label: 'Total Budget',
        description: 'Cost-effective development within budget constraints'
      }
    ]
  },
  {
    id: 'slb-simulator',
    title: 'Laboratory Test Simulator & Model Validator',
    description: 'Developed a Python-based tool to simulate and validate laboratory test results for constitutive models.',
    skills: ['Python', 'GUI Development', 'Numerical Simulation', 'Data Visualization', 'Material Modeling'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1280',
    longDescription: 'Developed a computational tool to simulate and validate laboratory test results for constitutive models, including Mohr-Coulomb, Drucker-Prager, and Von Mises. The project involved building a graphical user interface (GUI) for easy test selection, data input, and visualization of results. The tool enables efficient model evaluation for geomechanical applications in the oil and gas industry.',
    challenge: 'Creating an intuitive yet powerful system that allows engineers to select from multiple constitutive models, input material parameters, and validate against experimental data. Ensuring numerical stability and accuracy in the simulation outputs was a critical challenge.',
    solution: 'Developed a Python-based GUI using Tkinter, allowing users to configure tests such as Triaxial, UCS, and Hydrostatic stress simulations. Implemented numerical processing with NumPy and Pandas for computational efficiency. Integrated Matplotlib for result visualization and enabled batch processing for multiple test cases.',
    outcome: 'Created a fully functional simulator that streamlined the validation of constitutive models, reducing the time required for manual calculations. The tool was successfully used to compare various models against experimental data, leading to improved decision-making in material characterization.',
    methodologyImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/SLB_workflow.png?raw=True',
    resultImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/triaxial-compression-results.png?raw=True',
    startDate: 'June 2023',
    duration: '3 months',
    status: 'Completed',
    projectGoals: [
      'Develop a software tool to simulate laboratory test conditions for material modeling',
      'Implement a user-friendly GUI for test selection and data input',
      'Enable automated validation of constitutive models against experimental results'
    ],
    techStack: {
      tools: ['Python', 'Tkinter', 'NumPy', 'Pandas', 'Matplotlib'],
      approach: [
        'Object-oriented programming for modular design',
        'Graphical user interface development for ease of use',
        'Data visualization and numerical modeling for simulation validation'
      ]
    }
  },
  {
    id: 'wearable-tech',
    title: 'Wearable Sensory Feedback System for Upper Limb Stroke Rehabilitation',
    description: 'Developed a glove to help quantify and track strokes patients rehabilitation progress',
    skills: ['Embedded Programming', 'PCB Design', 'Data Visualisation', 'Wireless Communication'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1280',
    longDescription: 'An assistive glove to aid in stroke rehabilitation by providing real-time feedback to the patient and healthcare professionals. This technology also provides healthcare professionals a way to remotely track and monitor a patients progress, allowing for less disruption to the rehabilitation process in times of crisis such as a pandemic.',
    challenge: 'Ensuring the proper metrics are being used to evaluate progress. Providing a clear visualisation of the data to users.',
    solution: 'An in-depth medical literature review was done to understand current practice and developments in stroke rehabilitation. I interviewed medical professionals and stroke patients to determine points for improvement in the current rehabilitation process. A cross-reference was done to determine the target areas and project goals.',
    outcome: 'The finalised glove tracked and provided real time quantitative data regarding strength of fingers and finger flexion. The glove was tested in the most common rehabilitation methods such as strengthening exercises and ad task specific movements.',
    methodologyImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/IP-task-rehab-process.png?raw=True', 
    resultImage: 'https://github.com/N-Hrikeshraj/hrikesh/blob/main/src/assets/images/IP-task-rehab-results_1.png?raw=True',
    startDate: 'October 2022',
    duration: '6 months',
    status: 'Completed',
    projectGoals: [
      'Develop a wearable tech capable of tracking relavent metrics for upper limb stroke rehabilitation',
      'Design a data visualisation tool to clearly and concisely track rehabilitation progress',
      'Demonstrate the systems working capabilities to quantify data in typical rehabilitation processes'
    ],
    techStack: {
      tools: ['Embedded Programming', 'PCB Design', 'Data Visualisation', 'Wireless Communication'],
      approach: [
        'User-centered design methodology',
        'Iterative prototyping',
        'Evidence-based development'
      ]
    }
  },
  {
    id: 'xai-hair',
    title: 'Explainable Machine Learning on Classification of Healthy and Unhealthy Hair',
    description: 'Developed a deep learning model for early scalp disease diagnosis using explainable AI techniques.',
    skills: ['Tensorflow', 'XAI', 'Big Data', 'Image Recognition', 'LIME', 'SHAP'],
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=1280',
    longDescription: 'Developed a Convolutional Neural Network (CNN) to classify images of healthy and unhealthy hair and explain its decision-making process using Explainable AI (XAI) techniques such as SHAP and LIME. The model was trained on a dataset of scalp images and optimized for accurate and interpretable predictions.',
    challenge: 'Achieving high classification accuracy while ensuring model transparency. The key challenge was implementing interpretability methods to explain model decisions and identify influential features in the classification process.',
    solution: 'Implemented a CNN with multiple convolutional layers, dropout regularization, and Adam optimization. Used LIME and SHAP to generate visual explanations for model predictions, highlighting important image regions contributing to classification. Model training was enhanced with early stopping and checkpointing to ensure optimal performance.',
    outcome: 'Achieved an accuracy of 97.7% on validation data. The integration of LIME and SHAP provided meaningful interpretability, demonstrating the model\'s ability to detect patterns related to unhealthy hair conditions. This project showcases the potential for AI-assisted scalp disease diagnosis and explainable healthcare applications.',
    /*methodologyImage: '',
    resultImage: '',*/
    startDate: 'July 2022',
    duration: '2 months',
    status: 'Completed',
    projectGoals: [
      'Develop a deep learning model for accurate classification of healthy and unhealthy hair',
      'Implement explainability methods (LIME & SHAP) to interpret model decisions',
      'Evaluate model performance and reliability using confusion matrices and performance metrics'
    ],
    techStack: {
      tools: ['Tensorflow', 'XAI', 'Big Data', 'Image Recognition', 'LIME', 'SHAP'],
      approach: [
        'Deep Learning with CNNs',
        'Explainable AI for model interpretability',
        'Performance optimization using early stopping and checkpointing'
      ]
    }
  }
];
