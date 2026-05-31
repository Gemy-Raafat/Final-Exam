// ==================== DATA ====================
let currentUser = {};
let currentSubject = "";
let currentSubjectId = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = [];

// Subject images (online URLs)
const subjectImages = {
  np: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  se: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  cs: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  c3: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  es: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  ds: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  mp: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  cpp: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600&h=400&fit=crop",
  algo: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
};

const subjectsData = {
  network: [
    {
      id: "np",
      name: "Network Programming",
      icon: "🌐",
      date: "Mon 1/6/2026 - 2 Hours",
      hasQuestions: true,
    },
    {
      id: "se",
      name: "Software Engineering",
      icon: "⚙️",
      date: "Thu 4/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "cs",
      name: "CCNA Security",
      icon: "🔒",
      date: "Mon 8/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "c3",
      name: "CCNA 3",
      icon: "📡",
      date: "Thu 11/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "es",
      name: "Embedded System",
      icon: "🔧",
      date: "Mon 15/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "ds",
      name: "Distributed System",
      icon: "🖥️",
      date: "Thu 18/6/2026 - 2 Hours",
      hasQuestions: false,
    },
  ],
  software: [
    {
      id: "np",
      name: "Network Programming",
      icon: "🌐",
      date: "Mon 1/6/2026 - 2 Hours",
      hasQuestions: true,
    },
    {
      id: "se",
      name: "Software Engineering",
      icon: "⚙️",
      date: "Thu 4/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "mp",
      name: "Mobile Programming",
      icon: "📱",
      date: "Mon 8/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "cpp",
      name: "Advanced C++",
      icon: "💻",
      date: "Thu 11/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "es",
      name: "Embedded System",
      icon: "🔧",
      date: "Mon 15/6/2026 - 2 Hours",
      hasQuestions: false,
    },
    {
      id: "algo",
      name: "Algorithms",
      icon: "🧮",
      date: "Thu 18/6/2026 - 2 Hours",
      hasQuestions: false,
    },
  ],
};

// ==================== ALL QUESTIONS ====================
const questionsDB = {
  np: [
    // MCQ
    {
      type: "mcq",
      question: "A socket is defined as:",
      options: [
        "Port only",
        "IP address only",
        "IP address + Port number",
        "MAC address",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Ports in the range 1-1023 are used for:",
      options: [
        "Custom applications",
        "Temporary services",
        "Standard network services",
        "Gaming services",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which port is commonly used for HTTPS?",
      options: ["21", "25", "80", "443"],
      answer: 3,
    },
    {
      type: "mcq",
      question: "The OSI model contains:",
      options: ["5 layers", "6 layers", "7 layers", "8 layers"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which layer is closest to the end user?",
      options: [
        "Session layer",
        "Presentation layer",
        "Application layer",
        "Transport layer",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which layer performs data encryption?",
      options: [
        "Network layer",
        "Presentation layer",
        "Data link layer",
        "Physical layer",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which layer is responsible for routing?",
      options: [
        "Network layer",
        "Transport layer",
        "Session layer",
        "Application layer",
      ],
      answer: 0,
    },
    {
      type: "mcq",
      question: "The data unit of the transport layer is:",
      options: ["Packet", "Frame", "Segment", "Bit"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which layer uses MAC address?",
      options: [
        "Transport layer",
        "Network layer",
        "Data link layer",
        "Physical layer",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "The data unit of the physical layer is:",
      options: ["Frame", "Segment", "Packet", "Bits"],
      answer: 3,
    },
    {
      type: "mcq",
      question: "What is the function of the Physical Layer?",
      options: [
        "Data Encryption",
        "Data Compression",
        "Transferring machine language to signal",
        "Logical Addressing",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Encapsulation means:",
      options: [
        "Removing headers",
        "Adding headers and trailers",
        "Data compression",
        "Encryption only",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "CRC is used for:",
      options: ["Routing", "Error detection", "Encryption", "Compression"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Data at the sender moves from:",
      options: [
        "Layer 1 → Layer 7",
        "Layer 7 → Layer 1",
        "Layer 3 → Layer 5",
        "Layer 2 → Layer 6",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "Which error detection method uses a parity bit to check for errors?",
      options: [
        "Checksum",
        "Cyclic Redundancy Check",
        "Parity Check",
        "None of the above",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "TCP is:",
      options: [
        "Connectionless",
        "Connection-oriented",
        "Faster than UDP",
        "Unreliable",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "UDP is:",
      options: [
        "Reliable",
        "Connection-oriented",
        "Connectionless",
        "Slower than TCP",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "UDP is commonly used in:",
      options: ["File transfer", "Email", "Streaming", "Database systems"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "TCP guarantees:",
      options: [
        "Data loss",
        "Ordered delivery",
        "Fast transmission only",
        "No error checking",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which package is used for network programming in Java?",
      options: ["java.io", "java.net", "java.util", "java.lang"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which class is used to obtain the IP address?",
      options: ["Socket", "ServerSocket", "InetAddress", "URL"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What does the getLocalHost() method return?",
      options: [
        "The port number",
        "The hostname of the client",
        "The IP address of the local machine",
        "The server connection",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which class listens for incoming connections?",
      options: ["Socket", "ServerSocket", "DatagramSocket", "Scanner"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which method waits for client connection?",
      options: ["start()", "connect()", "accept()", "run()"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which class creates a TCP client connection?",
      options: ["ServerSocket", "Socket", "InetAddress", "URL"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which class sends UDP datagrams?",
      options: ["ServerSocket", "Socket", "DatagramSocket", "InetAddress"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What is the first step in setting up a UDP server in Java?",
      options: [
        "Create a buffer for incoming datagrams.",
        "Accept an incoming datagram.",
        "Retrieve the data from the buffer.",
        "Create a DatagramSocket object.",
      ],
      answer: 3,
    },
    {
      type: "mcq",
      question: "A thread is:",
      options: [
        "Independent program",
        "Lightweight unit of execution inside a process",
        "Hardware process",
        "Network protocol",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Why are threads used in servers?",
      options: [
        "Increase memory usage",
        "Handle multiple clients simultaneously",
        "Reduce server speed",
        "Stop communication",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which method starts a new thread?",
      options: ["run()", "start()", "sleep()", "interrupt()"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which method pauses a thread temporarily?",
      options: ["wait()", "notify()", "sleep()", "run()"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which method breaks a sleeping thread?",
      options: ["stop()", "interrupt()", "notify()", "close()"],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "What happens when many clients connect to a server simultaneously?",
      options: [
        "The server processes them sequentially",
        "The server must process the needs of several hundred clients simultaneously",
        "The server stops responding",
        "The server closes connections",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the limitation of extending the Thread class in Java?",
      options: [
        "It allows multiple inheritance",
        "It does not support Runnable interface",
        "Reduces flexibility of thread creation",
        "Prevents extending another class",
      ],
      answer: 3,
    },
    {
      type: "mcq",
      question: "What happens when run() is called directly?",
      options: [
        "New thread created",
        "Program stops",
        "Thread sleeps",
        "Executes in current thread sequentially",
      ],
      answer: 3,
    },
    {
      type: "mcq",
      question: "What does Runnable represent?",
      options: ["Thread", "Task to be executed", "Process", "Memory block"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Why is implementing Runnable preferred over extending Thread?",
      options: [
        "Faster execution",
        "Better design flexibility",
        "Supports multiple inheritance",
        "Avoids multithreading",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is a race condition?",
      options: [
        "Threads executing sequentially",
        "Multiple threads accessing shared data incorrectly",
        "A thread stopping suddenly",
        "Memory overflow",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the purpose of the synchronized keyword in Java?",
      options: [
        "Increase speed",
        "Allow one thread access at a time",
        "Stop threads",
        "Prevent waiting",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "What is the worst-case scenario when using locks in multithreaded programming?",
      options: [
        "Faster execution",
        "Reduced efficiency",
        "Deadlock",
        "Increased memory",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What is the role of join() method?",
      options: [
        "Starts a thread",
        "Stops a thread",
        "Waits for a thread to finish",
        "Synchronizes memory",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What happens if synchronized is removed from shared data?",
      options: [
        "Program crashes",
        "Threads stop",
        "Output becomes inconsistent",
        "No change",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What is the main idea of the two-stage multithreaded server?",
      options: [
        "One thread handles all clients",
        "Main thread assigns threads to clients",
        "Clients create threads",
        "Threads do not interact",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is deadlock?",
      options: [
        "Threads running fast",
        "Threads terminating",
        "Threads sharing memory",
        "Threads waiting forever for each other",
      ],
      answer: 3,
    },
    {
      type: "mcq",
      question:
        "According to the core principle of blocking mode, what occurs when a function is called?",
      options: [
        "The function returns immediately",
        "The program continues executing other tasks",
        "The program stops and waits until the operation is completely finished",
        "The system performs asynchronous verification",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "In blocking mode, the executing thread is:",
      options: [
        "Shared across multiple connections",
        "Completely paused until data is received",
        "Continuously polling for events",
        "Dynamically reassigned",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "In non-blocking mode, the core principle states that:",
      options: [
        "The operation must complete before returning",
        "The function returns immediately even if the operation is not complete",
        "The thread is blocked until data arrives",
        "A new thread is created per request",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Java NIO introduced:",
      options: [
        "Byte-oriented streams",
        "Thread-per-client model",
        "Block-oriented channels and buffers",
        "Blocking-only communication",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Channels in Java NIO differ from streams because they:",
      options: [
        "Operate on single bytes only",
        "Are not associated with buffers",
        "Transfer data in massive blocks using buffers",
        "Require blocking execution",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "The concept of multiplexing refers to:",
      options: [
        "Assigning one thread per client",
        "Handling multiple connections simultaneously by a single entity",
        "Blocking all incoming connections",
        "Sequential processing of clients",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "In event registration, channels:",
      options: [
        "Actively push data to the selector",
        "Register the type of event they are interested in",
        "Create new threads automatically",
        "Ignore selector mechanisms",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "Which method must be called to activate non-blocking mode for a ServerSocketChannel?",
      options: [
        "setNonBlocking(true)",
        "configureBlocking(false)",
        "enableAsync()",
        "setMode(NON_BLOCKING)",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the purpose of the Selector class in Java NIO?",
      options: [
        "To create new threads for each client",
        "To monitor events like new connections and data transmission",
        "To encrypt data sent over the network",
        "To allocate memory for buffers",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "The method selector.select() is used to:",
      options: [
        "Allocate buffers",
        "Wait for channels ready for I/O operations",
        "Create new channels",
        "Bind ports",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the primary purpose of Java RMI?",
      options: [
        "To improve single-machine performance",
        "To enable object-to-object communication between JVMs",
        "To replace Java serialization",
        "To create standalone Java applications",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which component acts as the client's proxy in RMI?",
      options: [
        "Skeleton",
        "Remote Reference Layer",
        "Stub",
        "Transport Layer",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "In RMI, the illusion refers to:",
      options: [
        "Hiding the server",
        "Making remote calls appear as local calls",
        "Removing network communication",
        "Encrypting data",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "In RMI, where does the skeleton reside?",
      options: [
        "Client-side",
        "Server-side",
        "Both client and server",
        "In the RMI registry",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the purpose of the RMI registry?",
      options: [
        "To compile remote objects",
        "To serialize method parameters",
        "To allow the lookup of remote objects by name",
        "To handle network failures",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question:
        "What is the main role of the Remote Reference Layer (RRL) in RMI?",
      options: [
        "Handling graphical user interfaces",
        "Managing logical communication between client and server",
        "Storing remote objects permanently",
        "Compiling Java classes",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "Which step in the RMI process involves opening a TCP socket and sending data over the network?",
      options: [
        "Client Calls",
        "RRL Encodes",
        "Transport Sends",
        "Result Returns",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What does marshalling include in addition to serialization?",
      options: [
        "Encryption of data",
        "Compression of files",
        "Adding method name and parameter information",
        "Storing data in a database",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Which layer is responsible for physical data transmission?",
      options: [
        "Application Layer",
        "Remote Reference Layer",
        "Transport Layer",
        "Registry Layer",
      ],
      answer: 2,
    },
    {
      type: "mcq",
      question: "What is used to establish reliable communication in RMI?",
      options: ["UDP", "TCP", "HTTP", "FTP"],
      answer: 1,
    },
    {
      type: "mcq",
      question: "Which Java packages are essential for implementing RMI?",
      options: [
        "java.net and java.io",
        "java.rmi, java.rmi.server, and java.rmi.registry",
        "java.util and java.lang",
        "java.sql and java.nio",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What must a remote interface extend in Java RMI?",
      options: [
        "java.io.Serializable",
        "java.rmi.Remote",
        "java.lang.Runnable",
        "java.rmi.server.UnicastRemoteObject",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "Which class is typically extended by the remote object implementation?",
      options: [
        "java.rmi.Naming",
        "java.rmi.server.UnicastRemoteObject",
        "java.rmi.RemoteException",
        "java.rmi.Registry",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "Which method is used by the server to register a remote object with the RMI registry?",
      options: [
        "Naming.lookup()",
        "Naming.rebind()",
        "Naming.bind()",
        "Naming.unbind()",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question:
        "What does the client use to obtain a reference to a remote object?",
      options: [
        "Naming.rebind()",
        "Naming.lookup()",
        "Naming.register()",
        "Naming.connect()",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the role of the RMI registry?",
      options: [
        "To compile remote objects",
        "To act as a naming service for remote objects",
        "To handle network security",
        "To serialize method parameters",
      ],
      answer: 1,
    },
    {
      type: "mcq",
      question: "What is the default port used by the RMI Registry?",
      options: ["8080", "3306", "1099", "21"],
      answer: 2,
    },
    {
      type: "mcq",
      question: "Why do remote methods throw RemoteException?",
      options: [
        "To improve performance",
        "To handle network-related failures",
        "To create threads",
        "To serialize objects",
      ],
      answer: 1,
    },

    // True/False
    {
      type: "tf",
      question:
        "Network programming allows applications to communicate over a network.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "A computer network consists only of devices.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "Client–Server architecture has centralized control.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "In Client–Server architecture, clients provide services to the server.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "In P2P architecture, each node can act as both client and server.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "P2P architecture has no central server.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "A port number identifies a service on a computer.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "A socket identifies a unique connection.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "A socket is defined as IP address + Port number.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Ports in the range 1–1023 are used for custom applications.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "Port 443 is used for HTTPS.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "A single server can run multiple services using the same port number.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "The OSI model consists of seven layers.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Data moves from Layer 1 to Layer 7 at the sender side.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "The Application layer is closest to the end user.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The Presentation layer performs data encryption.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The Session layer controls the dialogue between computers.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The Transport layer uses port numbers.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The Network layer uses MAC addresses.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "The Data Link layer is responsible for error detection.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The Physical layer transmits data as signals.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Encapsulation means removing headers from data.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "CRC is used for error detection.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "TCP is a connectionless protocol.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "UDP is faster than TCP.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "TCP guarantees ordered delivery of data.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "TCP guarantees delivery of data, but it does not guarantee that data will arrive in the same order it was sent.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "The java.net package is used for network programming in Java.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The InetAddress class is used to retrieve IP addresses.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The ServerSocket class is used to create client connections.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "The accept() method in the ServerSocket class is used to listen for incoming client connections.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "The application must be running first on the client side before the server side.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "In UDP communication, a single DatagramSocket can handle multiple clients without creating a separate socket for each one.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "A thread is a lightweight unit of execution inside a process.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "Threads share the process memory but each thread has its own stack.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "The start() method creates a completely new thread and executes the run() method concurrently.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Calling run() creates a new concurrent thread.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "The sleep(time_in_milliseconds) method permanently stops a thread.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "The interrupt() method breaks a thread from sleeping or waiting state.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "Runnable represents the task, while Thread represents the worker.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Java supports multiple inheritance of classes.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "synchronized prevents race conditions.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Deadlock is a safe state in multithreading.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "join() ensures the main thread waits for other threads.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "In blocking mode, the program stops and waits until the operation is completely finished.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "Non-blocking mode forces the thread to pause until completion.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "InputStream.available() provided an efficient high-scale solution.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "Java NIO introduced the java.nio package, replacing the underlying I/O mechanism.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "Multiplexing eliminates the need for idle, waiting threads.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "Blocking mode allows one single thread to serve many concurrent operations.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "RMI allows objects in different JVMs to communicate as if they were local.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "The stub is responsible for server-side method invocation.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "All remote objects must extend java.rmi.server.UnicastRemoteObject.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "Marshaling includes both serialization and adding protocol headers.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "The Transport Layer is responsible for implementing business logic.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "RMI can only be used for banking applications.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question:
        "Serialization converts objects to XML format for transmission.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "A remote interface must extend java.rmi.Remote.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "The client uses the rebind() method to look up a remote object.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      type: "tf",
      question: "The lookup() method returns a reference of type Remote.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question:
        "The client and server must reference a remote object using the same URL.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      type: "tf",
      question: "RMI uses UDP for communication between the client and server.",
      options: ["True", "False"],
      answer: 1,
    },
  ],
};

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==================== DUAA PAGE ====================
// Floating hearts
function createFloatingHearts() {
  const container = document.getElementById("duaaHearts");
  const hearts = ["💚", "🤲", "🕊️", "✨", "💜", "🌟", "❤️"];
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 8 + "s";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    container.appendChild(heart);
  }
}

function prayAndContinue() {
  let count = localStorage.getItem("duaaCount") || 0;
  count = parseInt(count) + 1;
  localStorage.setItem("duaaCount", count);
  document.getElementById("duaaCounter").textContent = count;
  showToast("جزاك الله خيراً على دعائك 🤲", "success");
  setTimeout(() => showPage("loginPage"), 1500);
}

window.addEventListener("load", () => {
  const count = localStorage.getItem("duaaCount") || 0;
  document.getElementById("duaaCounter").textContent = count;
  createFloatingHearts();
});

// ==================== LOGIN ====================
function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById("userName").value.trim();
  const id = document.getElementById("userId").value.trim();
  const dept = document.getElementById("userDept").value;
  let valid = true;

  if (!name) {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }
  if (!id) {
    document.getElementById("idError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("idError").style.display = "none";
  }
  if (!dept) {
    document.getElementById("deptError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("deptError").style.display = "none";
  }

  if (!valid) return;

  currentUser = { name, id, dept };
  document.getElementById("welcomeName").textContent = name;
  document.getElementById("welcomeId").textContent = id;
  document.getElementById("welcomeDept").textContent =
    dept.charAt(0).toUpperCase() + dept.slice(1);
  loadSubjects();
  showPage("subjectsPage");
}

// ==================== SUBJECTS ====================
function loadSubjects() {
  const grid = document.getElementById("subjectsGrid");
  grid.innerHTML = "";
  const subjects = subjectsData[currentUser.dept];

  subjects.forEach((sub, idx) => {
    const hasQ = sub.hasQuestions && questionsDB[sub.id];
    const card = document.createElement("div");
    card.className = `subject-card ${hasQ ? "" : "coming-soon"}`;
    if (hasQ) card.onclick = () => startExam(sub.id, sub.name);

    const imgUrl =
      subjectImages[sub.id] ||
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop";

    card.innerHTML = `
                    ${!hasQ ? '<div class="coming-soon-badge"><div class="coming-soon-text">⏳ Coming Soon<br>انتظر الأسئلة قريباً</div></div>' : ""}
                    <div class="subject-img">
                        <img src="${imgUrl}" alt="${sub.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'">
                        <div class="subject-img-overlay"></div>
                        <div class="subject-img-icon">${sub.icon}</div>
                    </div>
                    <div class="subject-info">
                        <div class="subject-name">${sub.name}</div>
                        <div class="subject-meta">
                            <span class="subject-questions">${hasQ ? questionsDB[sub.id].length + " Questions" : "No questions yet"}</span>
                            <span class="subject-status ${hasQ ? "status-ready" : "status-coming"}">${hasQ ? "✅ Ready" : "⏳ Soon"}</span>
                        </div>
                        <span class="subject-date">📅 ${sub.date}</span>
                    </div>
                `;
    grid.appendChild(card);
  });
}

// ==================== EXAM ====================
function startExam(subjectId, subjectName) {
  currentSubject = subjectName;
  currentSubjectId = subjectId;
  currentQuestions = [...questionsDB[subjectId]];
  shuffleArray(currentQuestions);
  currentQuestionIndex = 0;
  userAnswers = new Array(currentQuestions.length).fill(-1);
  document.getElementById("examSubjectName").textContent = subjectName;
  renderQuestion();
  showPage("examPage");
}

function renderQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const total = currentQuestions.length;
  const progress = (currentQuestionIndex / total) * 100;

  document.getElementById("examProgressBar").style.width = progress + "%";
  document.getElementById("examProgressText").textContent =
    `Question ${currentQuestionIndex + 1} of ${total}`;

  const card = document.getElementById("questionCard");
  const letters = ["A", "B", "C", "D"];
  const badgeClass = q.type === "mcq" ? "badge-mcq" : "badge-tf";
  const badgeText = q.type === "mcq" ? "📝 Multiple Choice" : "✅ True / False";

  let optionsHTML = "";
  q.options.forEach((opt, idx) => {
    const selectedClass =
      userAnswers[currentQuestionIndex] === idx ? "selected" : "";
    const letter = q.type === "mcq" ? letters[idx] : idx === 0 ? "T" : "F";
    optionsHTML += `
                    <li class="option-item ${selectedClass}" onclick="selectAnswer(${idx})">
                        <span class="option-letter">${letter}</span>
                        <span class="option-text">${opt}</span>
                    </li>
                `;
  });

  card.innerHTML = `
                <span class="question-type-badge ${badgeClass}">${badgeText}</span>
                <div class="question-number">Question ${currentQuestionIndex + 1} / ${total}</div>
                <div class="question-text">${q.question}</div>
                <ul class="options-list">${optionsHTML}</ul>
            `;

  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "slideIn 0.5s ease";

  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;
  document.getElementById("finishBtn").style.display =
    currentQuestionIndex === total - 1 ? "flex" : "none";
}

function selectAnswer(idx) {
  userAnswers[currentQuestionIndex] = idx;
  document
    .querySelectorAll(".option-item")
    .forEach((item) => item.classList.remove("selected"));
  document.querySelectorAll(".option-item")[idx].classList.add("selected");

  if (currentQuestionIndex < currentQuestions.length - 1) {
    setTimeout(() => {
      currentQuestionIndex++;
      renderQuestion();
    }, 400);
  } else {
    const fb = document.getElementById("finishBtn");
    fb.style.display = "flex";
    fb.style.animation = "pulse 1s infinite";
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function goBackToSubjects() {
  if (confirm("Are you sure? Your progress will be lost."))
    showPage("subjectsPage");
}

function finishExam() {
  const unanswered = userAnswers.filter((a) => a === -1).length;
  if (unanswered > 0) {
    if (
      !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)
    )
      return;
  }
  calculateResult();
}

// ==================== RESULTS ====================
function calculateResult() {
  let correct = 0,
    wrong = 0,
    unanswered = 0;
  currentQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === -1) unanswered++;
    else if (userAnswers[idx] === q.answer) correct++;
    else wrong++;
  });

  const total = currentQuestions.length;
  const percentage = Math.round((correct / total) * 100);
  let grade, gradeClass, emoji, message;

  if (percentage >= 85) {
    grade = "Excellent! 🌟";
    gradeClass = "grade-excellent";
    emoji = "🏆";
    message =
      "ما شاء الله عليك! أداء ممتاز جداً 🌟 إنت فخر لاهلك، كمّل على كده وربنا يوفقك دايماً يا هندسة! 💪✨";
  } else if (percentage >= 75) {
    grade = "Very Good! 👏";
    gradeClass = "grade-very-good";
    emoji = "🎉";
    message =
      "برافو عليك! 🎉 أداء جميل جداً، شوية مذاكرة كمان وهتوصل للامتياز إن شاء الله. ربنا يوفقك! 🙌";
  } else if (percentage >= 60) {
    grade = "Good 👍";
    gradeClass = "grade-good";
    emoji = "😊";
    message =
      "كويس أوي! 👍 بس تقدر تعمل أحسن من كده بكتير. راجع الي غلطت فيه وحاول تاني. إنت قدها! 💪";
  } else if (percentage >= 50) {
    grade = "Pass ✓";
    gradeClass = "grade-pass";
    emoji = "😐";
    message =
      "عدّيت بس محتاج تشد حيلك أكتر 📚 راجع كويس وذاكر تاني. التعب دلوقتي هيفرق معاك بعدين!";
  } else {
    grade = "Try Again 💪";
    gradeClass = "grade-fail";
    emoji = "😢";
    message =
      "متقلقش! كلنا بنتعلم من أخطائنا 🔥 راجع المادة كويس وحاول تاني. إنت أقوى من كده وأنا واثق فيك!";
  }

  document.getElementById("resultCard").innerHTML = `
                <div class="result-emoji">${emoji}</div>
                <div class="result-grade ${gradeClass}">${grade}</div>
                <div class="result-score">${percentage}%<span> / 100%</span></div>
                <div class="result-details">
                    <div class="detail-item">
                        <div class="detail-label">✅ Correct</div>
                        <div class="detail-value" style="color: var(--success)">${correct}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">❌ Wrong</div>
                        <div class="detail-value" style="color: var(--danger)">${wrong}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">⏭️ Skipped</div>
                        <div class="detail-value" style="color: #E67E22">${unanswered}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">📊 Total</div>
                        <div class="detail-value">${total}</div>
                    </div>
                </div>
                <div class="result-user-info">
                    <div class="info-row"><span class="info-label">👤 Name</span><span class="info-value">${currentUser.name}</span></div>
                    <div class="info-row"><span class="info-label">🔢 Student ID</span><span class="info-value">${currentUser.id}</span></div>
                    <div class="info-row"><span class="info-label">🎓 Department</span><span class="info-value">${currentUser.dept.charAt(0).toUpperCase() + currentUser.dept.slice(1)}</span></div>
                    <div class="info-row"><span class="info-label">📚 Subject</span><span class="info-value">${currentSubject}</span></div>
                </div>
                <div class="result-message">${message}</div>
                <div class="result-actions">
                    <button class="result-btn result-btn-primary" onclick="retryExam()">🔄 Try Again</button>
                    <button class="result-btn result-btn-secondary" onclick="showPage('subjectsPage')">📚 Other Subjects</button>
                </div>
            `;
  showPage("resultPage");
  if (percentage >= 85) {
    launchBalloons();
    launchConfetti();
  }
}

function retryExam() {
  if (currentSubjectId && questionsDB[currentSubjectId]) {
    startExam(currentSubjectId, currentSubject);
  }
}

// ==================== CELEBRATIONS ====================
function launchBalloons() {
  const container = document.getElementById("balloonsContainer");
  container.innerHTML = "";
  const colors = [
    "#FF6B6B",
    "#6C63FF",
    "#00C9A7",
    "#FFD93D",
    "#FF8A5C",
    "#A855F7",
    "#EC4899",
    "#4facfe",
    "#43e97b",
    "#f093fb",
  ];
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const b = document.createElement("div");
      b.className = "balloon";
      b.style.left = Math.random() * 100 + "%";
      b.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      b.style.setProperty("--drift", Math.random() * 200 - 100 + "px");
      b.style.setProperty("--rotate", Math.random() * 360 + "deg");
      b.style.animationDuration = 3 + Math.random() * 3 + "s";
      b.style.width = 40 + Math.random() * 25 + "px";
      b.style.height = 50 + Math.random() * 30 + "px";
      container.appendChild(b);
      setTimeout(() => b.remove(), 7000);
    }, i * 150);
  }
}

function launchConfetti() {
  const colors = [
    "#FF6B6B",
    "#6C63FF",
    "#00C9A7",
    "#FFD93D",
    "#FF8A5C",
    "#A855F7",
    "#EC4899",
    "#4facfe",
  ];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "%";
      c.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      c.style.setProperty("--drift", Math.random() * 200 - 100 + "px");
      c.style.width = 5 + Math.random() * 10 + "px";
      c.style.height = 5 + Math.random() * 10 + "px";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      c.style.animationDuration = 2 + Math.random() * 2 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }, i * 50);
  }
}

// ==================== UTILITIES ====================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function showToast(msg, type) {
  const t = document.createElement("div");
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function logout() {
  currentUser = {};
  document.getElementById("userName").value = "";
  document.getElementById("userId").value = "";
  document.getElementById("userDept").value = "";
  showPage("loginPage");
}
