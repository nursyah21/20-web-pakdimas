interface Items {
  img: string
  title: string
  text: string
}
interface Data {
  vicons: Items[]
  viconHardware: Items[]
  amti: Items[]
  cometa: Items[]
  motek: Items[]
  cyberdyne: Items[]
}
export const data: Data = {
  vicons: [
    {
      img: "/images/shogun.png",
      title: "SHOGUN",
      text: "Bringing together Vicon’s industry leading tracking of both rigid object and full body subjects, the virtual production pipeline allows users to track film and video cameras alongside highly realistic digital characters, with fingers and face, all within the Shōgun platform."
    },
    {
      img: "/images/nexus.png",
      title: "NEXUS",
      text: "Life Sciences software solution paired with optical and inertial Vicon hardware. The software is suitable for those who are working in gait analysis and rehabilitation, neuroscience and motor control, animal science, and sports performance and biomechanics. "
    },
    {
      img: "/images/tracker.png",
      title: "TRACKER",
      text: "Suitable for engineering application software solutions that work really well with Vicon cameras. A simple to learn yet highly functional user interface, realtime data with minimal latency combined with over 30 years of perfecting camera calibration and 3D reconstruction techniques has resulted in an accurate and affordable 3D tracking solution. "
    }
  ],
  viconHardware: [
    {
      img: "/images/vicon-valkryie.png",
      title: "VICON Valkryie",
      text: `VALKYRIE IS THE NEW FOUNDATION OF YOUR MOTION CAPTURE SYSTEM. AGILITY, SPEED AND RAW POWER ARE PRECISION-ENGINEERED INTO EVERY DETAIL.
<br/><br/>
Created from the ground up based on the invaluable feedback of our global community, Valkyrie builds on more than three and a half decades of Vicon expertise to fit seamlessly into our best-in-class ecosystem.`
    },
    {
      img: "/images/vicon-vantage.png",
      title: "VICON Vantage",
      text: "The most powerful processing algorithms and electronics, combined with industry-leading tracking and data fidelity, means motion capture cameras just took another major step forward. Advances in Vicon’s technology IP allow Vantage to hit resolution and speed sweet spots that make it truly unique"
    },
    {
      img: "/images/vicon-vero.png",
      title: "VICON Vero",
      text: `With the best resolution/speed/price offering on the market, Vicon Vero is the latest optical camera from Vicon. 
<br/><br/>
Building on the success of Vantage, Vero combined market-leading resolution and speed at an unrivaled price point. Like its bigger brother, Vantage, Vero has on-board sensors that monitor camera position and temperature to ensure optimal performance at all times.`
    },
    {
      img: "/images/vicon-blue-triden.png",
      title: "VICON Blue Trident",
      text: "Engineered to capture the highest quality data Higher fidelity measurement, three times faster data download speed, and real-time analysis – in the field and in water – Vicon’s Blue Trident is our newest life sciences wearable. The next generation of our market-leading Inertial Measurement Unit (IMU), Blue Trident is lightweight, easy to use, flexible and reliable."
    },
    {
      img: "/images/vicon-viper.png",
      title: "VICON Viper",
      text: "The new Viper is the most powerful motion tracking camera for the VR industry. Designed to work with active marker technology, Viper is engineered with the flexibility to track any space, enabling endless creativity for your location-based entertainment."
    },
    {
      img: "/images/vicon-viperx.png",
      title: "VICON ViperX",
      text: "The ‘big brother’ to Vicon’s Viper camera; ViperX enables greater scale than ever before. ViperX is part of the fully active Origin system, using wearable smart tracking devices that are controlled wirelessly from the software providing everything needed for LBVR."
    },
    {
      img: "/images/vicon-calibration-wand.png",
      title: "VICON Calibration Wand",
      text: "Use the calibration wand to ensure your optical system is always both precise and accurate."
    },
    {
      img: "/images/vicon-vue.png",
      title: "VICON Vue",
      text: "Vicon Vue is the industry’s only high definition fully synchronized high resolution video camera that does not sacrifice speed for clarity. With full HD resolution, Vicon Vue brings the sharpest video image into your motion capture volume"
    },
    {
      img: "/images/vicon-camera-capsule.png",
      title: "VICON Camera Capsule",
      text: "Vicon camera casing so you can leave your optical system outdoors long-term in adverse weather conditions."
    },
    {
      img: "/images/vicon-beacon.png",
      title: "VICON Beacon",
      text: "Bought as part of the Origin LBVR system packs, Beacon allows the communication between your Pulsar clusters and Evoke software."
    },
    {
      img: "/images/vicon-pulsar.png",
      title: "VICON Pulsar",
      text: "Active LED clusters that attach to your players to turn them into the characters in your Origin LBVR system – these are purchased as part of the system packs."
    },
    {
      img: "/images/vicon-supernova.png",
      title: "VICON SuperNova",
      text: "Bought as part of the Origin LBVR system packs, Beacon allows the communication between your Pulsar clusters and Evoke software."
    },
    {
      img: "/images/vicon-nova.png",
      title: "VICON Nova",
      text: "Use this to add props of all kinds to your Origin LBVR system. Nova is an optional extra and not included in the system packs.",
    },
    {
      img: "/images/vicon-locksync-box.png",
      title: "VICON Lock Sync Box",
      text: "Lock Lab and Lock Studio are Vicon’s control box for connecting, integrating and synchronizing third-party devices with your Vicon motion capture system."
    }
  ],
  amti: [
    {
      img: "/images/amti-accugait.png",
      title: "AMTI AccuGait-Optimized",
      text: "The AccuGait-Optimized (ACG-O) is AMTI’s portable solution for quantifying human gait and balance."
    },
    {
      img: "/images/amti-accupower.png",
      title: "AMTI AccuPower-Optimized",
      text: "AMTI’s AccuPower-Optimized (ACP-O) multi-axis force platform is a portable solution for jump, drop landing, squat analysis and more."
    },
    {
      img: "/images/amti-accusway.png",
      title: "AMTI AccuSway-Optimized",
      text: "The portable AccuSway-Optimized (ACS-O) is perfect for on-the-go balance assessments and training."
    },
    {
      img: "/images/amti-force-plate.png",
      title: "AMTI Filler Force Plates",
      text: "We supply AMTI filler force plates in quarter, half and full length sizes to create the optimum custom set-up."
    },
    {
      img: "/images/amti-force-torque.png",
      title: "AMTI Force Plate Stairs",
      text: "AMTI’s force platform stairway has been designed in response to clinical patient requests to improve their gait while going up and down stairs."
    },
    {
      img: "",
      title: "AMTI Force/Torque Sensors",
      text: "AMTI’s multi-axis load cells (multi-axis transducers) are ideal whenever it is important to measure forces and moments in three dimensions."
    },
    {
      img: "/images/amti-treadmills.png",
      title: "AMTI Treadmills",
      text: "These treadmills can be with or without incline, and are a compact dual-belt end-to-end force sensing treadmill."
    },
    {
      img: "/images/amti-multi-axis.png",
      title: "AMTI Multi-Axis Wear Testing Machines",
      text: "These simulate human joint motion, for the purpose of testing and evaluating prosthetic devices prior to clinical use."
    },
    {
      img: "/images/amti-optima-biomechanis.png",
      title: "AMTI Optima Biomechanics Measurement System",
      text: "AMTI’s Biomechanics Measurement System (Optima-BMS) is Optima technology in the most affordable package."
    },
    {
      img: "/images/amti-optima-human.png",
      title: "AMTI Optima Human Performance System",
      text: "AMTI’s ground-breaking development in force technology offers a 10-fold improvement over any other force platform available on the market"
    },
    {
      img: "/images/amti-optima-medical.png",
      title: "AMTI Optima Medical Measurement System",
      text: "The Optima-MMS is the only medical force plate on the EU market and is a certified Class 1m Medical Device. Active LED clusters that attach to your players to turn them into the characters in your Origin LBVR system – these are purchased as part of the system packs."
    },
    {
      img: "/images/amti-optima-special.png",
      title: "AMTI Optima Special Purpose Series",
      text: "The Optima-SPS allows activities on the top surface of the force plate to be viewed and recorded from the underside."
    }
  ],
  cometa: [
    {
      img: "/images/cometa-emg-software.png",
      title: "Cometa EMG Software",
      text: "Cometa’s EMG Easy Report Software allows you to quickly and simply analyze your acquired data."
    },
    {
      img: "/images/cometa-emg.png",
      title: "Cometa EMG/IMU Accessories",
      text: "Customise your EMG or IMU products to your specific needs with these Cometa accessories, including remote controllers and fine wire probes."
    },
    {
      img: "/images/cometa-pico.png",
      title: "Cometa PicoEMG",
      text: "Similar to the Mini Wave Infinity, the PicoEMG features minimalist design, improved battery life, smaller size, integrated accelerometer and on-board memory."
    },
    {
      img: "/images/cometa-mini-wave-infinity.png",
      title: "Cometa Mini Wave Infinity",
      text: "The Mini Wave Infinity is a state-of-the-art wireless EMG and data logger and is an evolution of the Mini Wave."
    },
    {
      img: "/images/cometa-mini-wave-waterproof.png",
      title: "Cometa Mini Wave Waterproof",
      text: "This special version of the Mini Wave Infinity is fully waterproof, allowing the acquisition of EMG signal underwater."
    },
    {
      img: "/images/cometa-wave-plus.png",
      title: "Cometa Wave Plus EMG",
      text: "The Wave Plus wireless EMG system has been designed to be the best wireless EMG system in the world."
    },
    {
      img: "/images/cometa-wavetrack.png",
      title: "Cometa WaveTrack IMU",
      text: "The WaveTrack Inertial System is the ultimate solution for inertial motion tracking, and is the smallest wireless IMU transmitter in the world."
    }
  ],
  motek: [
    {
      img: "/images/motek-caren.png",
      title: "Motek CAREN",
      text: "The Computer Assisted Rehabilitation Environment (CAREN) is the world’s most advanced biomechanics laboratory using augmented and virtual reality."
    },
    {
      img: "/images/motek-cmill.png",
      title: "Motek C-Mill",
      text: "The C-Mill is an augmented and virtual reality instrumented single belt treadmill, used for the evaluation and training of impaired gait and balance."
    },
    {
      img: "/images/motek-mgait.png",
      title: "Motek M-Gait",
      text: "The M-Gait is a modular 3D instrumented dual-belt treadmill which can have various upgrades to improved the functionality of your set-up."
    }
  ],
  cyberdyne: [
    {
      img: "/images/hybrid-assistive-limb.png",
      title: "Hybrid Assistive Limb (HAL)",
      text: "A robotic exoskeleton designed to assist individuals with limited mobility, such as patients with spinal cord injuries or stroke, to improve their ability to walk or move more effectively"
    },
    {
      img: "/images/hal-peripherals.png",
      title: "Hal Peripherals",
      text: "HAL Tread is the specially developed treadmill in order to provide effective walking exercise to the wearer of HAL for Lower Limb. As a hanging frame to support the wearer’s trunk and a treadmill are combined, without further environmental improvement, gait training can immediately be started safely at ease"
    },
    {
      img: "/images/transportation-robot.png",
      title: "Transportation Robot",
      text: "Transportation Robot can work in factories, offices and various indoor environments without using floor markers. Transportation routes of the robot can be set flexibly as it does not require floor marker and grid installation*. The robot, therefore, can move between floors easily. The robot will support people by smartly “robotizing” work places"
    },
    {
      img: "/images/hal-single-joint.png",
      title: "HAL Single joint",
      text: "With this small and lightweight HAL for Well-being Single Joint Type made of soft materials, the wearer can perform training, lying on the bed. Training with HAL for Well-being Single Joint Type can be conducted at any time and any place"
    },
    {
      img: "/images/hal-for-medical-use.png",
      title: "HAL For Medical Use Single Joint Type",
      text: "Like all other HAL systems, the product is installed with a mode to control the motors with the wearer’s intent of the movement. The non-invasive sensor of the product can detect faint “bio-electrical signals” for patients who have difficulty moving"
    }
  ]
}