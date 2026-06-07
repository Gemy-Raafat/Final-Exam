//==================== DATA ====================
let currentUser = {};
let currentSubject = "";
let currentSubjectId = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = [];

const subjectImages = {
  np: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  se: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  cs: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  c3: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  es: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  ds: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  mp: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  cpp: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  algo: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
};

const subjectsData = {
  network: [
    { id: "np", name: "Network Programming", icon: "🌐", date: "Mon 1/6/2026 - 2 Hours", hasQuestions: true },
    { id: "se", name: "Software Engineering", icon: "⚙️", date: "Thu 4/6/2026 - 2 Hours", hasQuestions: false },
    { id: "cs", name: "CCNA Security", icon: "🔒", date: "Mon 8/6/2026 - 2 Hours", hasQuestions: false },
    { id: "c3", name: "CCNA 3", icon: "📡", date: "Thu 11/6/2026 - 2 Hours", hasQuestions: true },
    { id: "es", name: "Embedded System", icon: "🔧", date: "Mon 15/6/2026 - 2 Hours", hasQuestions: false },
    { id: "ds", name: "Distributed System", icon: "🖥️", date: "Thu 18/6/2026 - 2 Hours", hasQuestions: false },
  ],
  software: [
    { id: "np", name: "Network Programming", icon: "🌐", date: "Mon 1/6/2026 - 2 Hours", hasQuestions: true },
    { id: "se", name: "Software Engineering", icon: "⚙️", date: "Thu 4/6/2026 - 2 Hours", hasQuestions: false },
    { id: "mp", name: "Mobile Programming", icon: "📱", date: "Mon 8/6/2026 - 2 Hours", hasQuestions: true },
    { id: "cpp", name: "Advanced C++", icon: "💻", date: "Thu 11/6/2026 - 2 Hours", hasQuestions: false },
    { id: "es", name: "Embedded System", icon: "🔧", date: "Mon 15/6/2026 - 2 Hours", hasQuestions: false },
    { id: "algo", name: "Algorithms", icon: "🧮", date: "Thu 18/6/2026 - 2 Hours", hasQuestions: false },
  ],
};

// ==================== ALL QUESTIONS ====================
const questionsDB = {
  np: [
    // Tutorial 1
    { type: "mcq", question: "Network programming mainly focuses on:", options: ["Hardware design", "Writing standalone programs", "Communication between programs over a network", "Database management"], answer: 2, explanation: "برمجة الشبكات بتركز على التواصل بين البرامج عبر الشبكة." },
    { type: "mcq", question: "A computer network consists of:", options: ["Devices only", "Data only", "Devices + Connection + Data", "Internet only"], answer: 2, explanation: "الشبكة بتتكون من أجهزة + وصلات + بيانات." },
    { type: "mcq", question: "In Client–Server architecture, who provides the service?", options: ["Client", "Switch", "Router", "Server"], answer: 3, explanation: "السيرفر بيقدم الخدمة والكلاينت بيطلبها." },
    { type: "mcq", question: "Which application uses Client–Server architecture?", options: ["Torrent", "Web browsing", "Blockchain", "P2P file sharing"], answer: 1, explanation: "تصفح الويب بيستخدم Client-Server." },
    { type: "mcq", question: "What is a disadvantage of Client–Server architecture?", options: ["No control", "High security", "Server failure affects clients", "Difficult communication"], answer: 2, explanation: "لو السيرفر وقع كل الكلاينتس بيتأثروا." },
    { type: "mcq", question: "What is a key advantage of Client–Server architecture?", options: ["No central control", "Easy management", "No server required", "Each node is equal"], answer: 1, explanation: "الإدارة سهلة لأن كل حاجة مركزية." },
    { type: "mcq", question: "Which statement about P2P networks is TRUE?", options: ["There is one central server", "Nodes cannot share resources", "Each node can act as both client and server", "Security is always high"], answer: 2, explanation: "في P2P كل جهاز ممكن يكون كلاينت وسيرفر." },
    { type: "mcq", question: "Which architecture uses centralized control?", options: ["Peer-to-Peer", "Client–Server", "Hybrid Mesh", "Ad-hoc"], answer: 1, explanation: "Client-Server بتستخدم تحكم مركزي." },
    { type: "mcq", question: "In Client–Server architecture, the client:", options: ["Provides resources", "Requests services", "Controls the network", "Manages security"], answer: 1, explanation: "الكلاينت بيطلب خدمات من السيرفر." },
    { type: "mcq", question: "Which of the following is a common use of P2P?", options: ["Database servers", "Web hosting", "File sharing systems", "Email servers"], answer: 2, explanation: "P2P بيستخدم لمشاركة الملفات." },
    { type: "mcq", question: "A port number is used to:", options: ["Identify a computer", "Identify a service on a computer", "Identify a protocol", "Identify a cable"], answer: 1, explanation: "البورت بيحدد خدمة معينة على الكمبيوتر." },
    { type: "mcq", question: "A socket is defined as:", options: ["Port only", "IP address only", "IP address + Port number", "MAC address"], answer: 2, explanation: "Socket = IP + Port Number." },
    { type: "mcq", question: "Ports in the range 1-1023 are reserved for:", options: ["Custom applications", "Temporary connections", "Standard network services", "Gaming applications"], answer: 2, explanation: "البورتات دي محجوزة للخدمات الأساسية." },
    { type: "mcq", question: "Valid port numbers range from:", options: ["0–1023", "1–65535", "100–500", "1–1024"], answer: 1, explanation: "المدى من 1 لـ 65535." },
    { type: "mcq", question: "Which port is commonly used for HTTPS?", options: ["21", "25", "80", "443"], answer: 3, explanation: "HTTPS بيستخدم بورت 443." },
    { type: "tf", question: "Network programming allows applications to communicate over a network.", options: ["True", "False"], answer: 0, explanation: "صح، برمجة الشبكات للتواصل بين التطبيقات." },
    { type: "tf", question: "A computer network consists only of devices.", options: ["True", "False"], answer: 1, explanation: "غلط، فيها أجهزة + وصلات + بيانات." },
    { type: "tf", question: "Client–Server architecture has centralized control.", options: ["True", "False"], answer: 0, explanation: "صح، Client-Server فيها تحكم مركزي." },
    { type: "tf", question: "In Client–Server architecture, clients provide services to the server.", options: ["True", "False"], answer: 1, explanation: "غلط، السيرفر بيقدم الخدمات." },
    { type: "tf", question: "Client–Server architecture has no central control.", options: ["True", "False"], answer: 1, explanation: "غلط، فيها تحكم مركزي." },
    { type: "tf", question: "In P2P architecture, each node can act as both client and server.", options: ["True", "False"], answer: 0, explanation: "صح، كل جهاز كلاينت وسيرفر." },
    { type: "tf", question: "P2P architecture has no central server.", options: ["True", "False"], answer: 0, explanation: "صح، P2P لامركزية." },
    { type: "tf", question: "P2P architecture has equal nodes.", options: ["True", "False"], answer: 0, explanation: "صح، كل الأجهزة متساوية." },
    { type: "tf", question: "Server failure may affect all clients in Client–Server architecture.", options: ["True", "False"], answer: 0, explanation: "صح، لو السيرفر وقع كل الكلاينتس بيتأثروا." },
    { type: "tf", question: "P2P networks are easier to manage than Client–Server networks.", options: ["True", "False"], answer: 1, explanation: "غلط، P2P أصعب في الإدارة." },
    { type: "tf", question: "A port number identifies a service on a computer.", options: ["True", "False"], answer: 0, explanation: "صح، البورت بيحدد خدمة." },
    { type: "tf", question: "A socket identifies a unique connection.", options: ["True", "False"], answer: 0, explanation: "صح، Socket بيحدد اتصال فريد." },
    { type: "tf", question: "A socket is defined as IP address + Port number.", options: ["True", "False"], answer: 0, explanation: "صح، Socket = IP + Port." },
    { type: "tf", question: "Ports in the range 1–1023 are used for custom applications.", options: ["True", "False"], answer: 1, explanation: "غلط، دي للخدمات الأساسية." },
    { type: "tf", question: "Port 443 is used for HTTPS.", options: ["True", "False"], answer: 0, explanation: "صح، 443 لـ HTTPS." },
    { type: "tf", question: "A single server can run multiple services using the same port number.", options: ["True", "False"], answer: 1, explanation: "غلط، كل خدمة لازم بورت مختلف." },
    { type: "tf", question: "Ports are physical hardware components inside the computer.", options: ["True", "False"], answer: 1, explanation: "غلط، البورتات أرقام منطقية." },
    { type: "tf", question: "Standard services usually use ports from 1–1023.", options: ["True", "False"], answer: 0, explanation: "صح، الخدمات الأساسية بتستخدم البورتات دي." },
    { type: "tf", question: "Most modern systems may combine Client–Server and P2P approaches.", options: ["True", "False"], answer: 0, explanation: "صح، فيه أنظمة بتجمع بين الاتنين." },

    // Tutorial 2 - OSI
    { type: "mcq", question: "Which organization was assigned the task of creating a standard for network connection by ISO?", options: ["ITU-T", "IEEE", "ANSI", "IETF"], answer: 1, explanation: "IEEE هي المنظمة المسؤولة عن معايير الشبكات." },
    { type: "mcq", question: "The OSI model contains:", options: ["5 layers", "6 layers", "7 layers", "8 layers"], answer: 2, explanation: "OSI بيتكون من 7 طبقات." },
    { type: "mcq", question: "Which layer of the OSI model is closest to the end user?", options: ["Session layer", "Presentation layer", "Application layer", "Transport layer"], answer: 2, explanation: "Application Layer هي الأقرب للمستخدم." },
    { type: "mcq", question: "What is the primary function of the Presentation Layer?", options: ["Data Compression", "Data Encryption", "Data Translation", "All of the above"], answer: 3, explanation: "Presentation بتعمل ترجمة وضغط وتشفير." },
    { type: "mcq", question: "Which layer performs data encryption?", options: ["Network layer", "Presentation layer", "Data link layer", "Physical layer"], answer: 1, explanation: "التشفير في Presentation Layer." },
    { type: "mcq", question: "Which of the following is NOT a function of the Session Layer?", options: ["Authentication", "Data Compression", "Session Synchronization", "Authorization"], answer: 1, explanation: "ضغط البيانات من Presentation مش Session." },
    { type: "mcq", question: "Which protocol is known as connection-oriented and focuses on reliable data delivery?", options: ["UDP", "TCP", "IP", "FTP"], answer: 1, explanation: "TCP موجه للاتصال وموثوق." },
    { type: "mcq", question: "What is the main function of the Network Layer?", options: ["Logical Addressing", "Routing", "Both A and B", "Data Encryption"], answer: 2, explanation: "Network Layer بتعمل Routing و Logical Addressing." },
    { type: "mcq", question: "Which layer is responsible for routing?", options: ["Network layer", "Transport layer", "Session layer", "Application layer"], answer: 0, explanation: "Routing من مسؤولية Network Layer." },
    { type: "mcq", question: "Which layer is responsible for node-to-node delivery of messages?", options: ["Network Layer", "Data Link Layer", "Physical Layer", "Transport Layer"], answer: 1, explanation: "Data Link Layer للتوصيل من جهاز لجهاز مجاور." },
    { type: "mcq", question: "What is added to the data segment at the Data Link Layer to create a frame?", options: ["IP Address", "MAC Address", "Port Number", "Sequence Number"], answer: 1, explanation: "MAC Address بيتضاف في Data Link." },
    { type: "mcq", question: "Which layer uses MAC address?", options: ["Transport layer", "Network layer", "Data link layer", "Physical layer"], answer: 2, explanation: "MAC في Data Link Layer." },
    { type: "mcq", question: "Data Link Layer addressing uses:", options: ["Port number", "MAC address", "IP address", "URL"], answer: 1, explanation: "Data Link بتستخدم MAC." },
    { type: "mcq", question: "Which error detection method uses a parity bit to check for errors?", options: ["Checksum", "Cyclic Redundancy Check", "Parity Check", "None of the above"], answer: 2, explanation: "Parity Check بيستخدم بت واحد." },
    { type: "mcq", question: "What is the function of the Physical Layer?", options: ["Data Encryption", "Data Compression", "Transferring machine language to signal", "Logical Addressing"], answer: 2, explanation: "Physical بتحول البيانات لإشارات." },
    { type: "mcq", question: "The transmission mode where each node can send and receive but not simultaneously is:", options: ["Simplex", "Full duplex", "Half duplex", "Not the above"], answer: 2, explanation: "Half Duplex = إرسال واستقبال بس مش في نفس الوقت." },
    { type: "mcq", question: "After data division into segments, each segment has port and sequence numbers. This is done by:", options: ["Data transportation", "Data flow rate", "Transport protocol selection", "Data Compression"], answer: 0, explanation: "عملية نقل البيانات بتقسم لـ Segments." },
    { type: "mcq", question: "Which is known as a connectionless system used for streaming?", options: ["UDP", "TCP", "IP", "FTP"], answer: 0, explanation: "UDP بدون اتصال للبث المباشر." },
    { type: "mcq", question: "The data unit of the transport layer is:", options: ["Packet", "Frame", "Segment", "Bit"], answer: 2, explanation: "وحدة Transport هي Segment." },
    { type: "mcq", question: "Data unit of Network Layer is:", options: ["Frame", "Packet", "Segment", "Bits"], answer: 1, explanation: "وحدة Network هي Packet." },
    { type: "mcq", question: "The data unit of the physical layer is:", options: ["Frame", "Segment", "Packet", "Bits"], answer: 3, explanation: "Physical بتتعامل مع Bits." },
    { type: "mcq", question: "Encapsulation means:", options: ["Removing headers", "Adding headers and trailers", "Data compression", "Encryption only"], answer: 1, explanation: "Encapsulation = إضافة Headers و Trailers." },
    { type: "mcq", question: "CRC is used for:", options: ["Routing", "Error detection", "Encryption", "Compression"], answer: 1, explanation: "CRC لاكتشاف الأخطاء." },
    { type: "mcq", question: "Data at the sender moves from:", options: ["Layer 1 → Layer 7", "Layer 7 → Layer 1", "Layer 3 → Layer 5", "Layer 2 → Layer 6"], answer: 1, explanation: "عند المرسل من 7 لـ 1." },
    { type: "tf", question: "The OSI model consists of seven layers.", options: ["True", "False"], answer: 0, explanation: "صح، OSI فيه 7 طبقات." },
    { type: "tf", question: "Data moves from Layer 1 to Layer 7 at the sender side.", options: ["True", "False"], answer: 1, explanation: "غلط، من 7 لـ 1 عند المرسل." },
    { type: "tf", question: "The Application Layer interacts directly with the user.", options: ["True", "False"], answer: 0, explanation: "صح، Application بتتعامل مع المستخدم." },
    { type: "tf", question: "The Application layer is closest to the end user.", options: ["True", "False"], answer: 0, explanation: "صح، الأقرب للمستخدم." },
    { type: "tf", question: "The Presentation layer performs data encryption.", options: ["True", "False"], answer: 0, explanation: "صح، Presentation بتعمل تشفير." },
    { type: "tf", question: "The Session layer controls the dialogue between computers.", options: ["True", "False"], answer: 0, explanation: "صح، Session بتتحكم في الحوار." },
    { type: "tf", question: "The Session Layer is responsible for data encryption.", options: ["True", "False"], answer: 1, explanation: "غلط، التشفير في Presentation." },
    { type: "tf", question: "The Transport layer uses port numbers.", options: ["True", "False"], answer: 0, explanation: "صح، Transport بتستخدم البورتات." },
    { type: "tf", question: "The Transport Layer is responsible for data segmentation and reassembly.", options: ["True", "False"], answer: 0, explanation: "صح، Transport بتقسم وتجمع البيانات." },
    { type: "tf", question: "The Network layer uses MAC addresses.", options: ["True", "False"], answer: 1, explanation: "غلط، Network بتستخدم IP." },
    { type: "tf", question: "The Network Layer adds MAC addresses to the data segment.", options: ["True", "False"], answer: 1, explanation: "غلط، MAC في Data Link." },
    { type: "tf", question: "The Data Link layer is responsible for error detection.", options: ["True", "False"], answer: 0, explanation: "صح، Data Link لاكتشاف الأخطاء." },
    { type: "tf", question: "The Data Link Layer is responsible for error detection and correction.", options: ["True", "False"], answer: 0, explanation: "صح، اكتشاف وتصحيح الأخطاء." },
    { type: "tf", question: "The Physical layer transmits data as signals.", options: ["True", "False"], answer: 0, explanation: "صح، Physical بتحول لإشارات." },
    { type: "tf", question: "The Physical Layer transfers data in electrical, optical, or radio signals.", options: ["True", "False"], answer: 0, explanation: "صح، إشارات كهربائية أو ضوئية أو لاسلكية." },
    { type: "tf", question: "Encapsulation means removing headers from data.", options: ["True", "False"], answer: 1, explanation: "غلط، Encapsulation = إضافة، Decapsulation = إزالة." },
    { type: "tf", question: "CRC is used for error detection.", options: ["True", "False"], answer: 0, explanation: "صح، CRC لاكتشاف الأخطاء." },
    { type: "tf", question: "Checksum divides data into equal subunits.", options: ["True", "False"], answer: 0, explanation: "صح، Checksum بيقسم لوحدات متساوية." },
    { type: "tf", question: "UDP is a connection-oriented protocol.", options: ["True", "False"], answer: 1, explanation: "غلط، UDP Connectionless." },
    { type: "tf", question: "TCP is reliable and connection-oriented.", options: ["True", "False"], answer: 0, explanation: "صح، TCP موثوق وموجه للاتصال." },
    { type: "tf", question: "TCP is a connectionless protocol.", options: ["True", "False"], answer: 1, explanation: "غلط، TCP Connection-oriented." },
    { type: "tf", question: "UDP is faster than TCP.", options: ["True", "False"], answer: 0, explanation: "صح، UDP أسرع." },
    { type: "tf", question: "TCP guarantees ordered delivery of data.", options: ["True", "False"], answer: 0, explanation: "صح، TCP بيضمن الترتيب." },
    { type: "tf", question: "TCP guarantees delivery but not order.", options: ["True", "False"], answer: 1, explanation: "غلط، TCP بيضمن الاتنين." },
    { type: "tf", question: "Frame is the data unit of Data Link Layer.", options: ["True", "False"], answer: 0, explanation: "صح، وحدة Data Link = Frame." },
    { type: "tf", question: "Router works at Network Layer.", options: ["True", "False"], answer: 0, explanation: "صح، الراوتر Layer 3." },
    { type: "tf", question: "Parity bit is added in trailer.", options: ["True", "False"], answer: 0, explanation: "صح، Parity Bit في Trailer." },
    { type: "tf", question: "Decapsulation happens at receiver side.", options: ["True", "False"], answer: 0, explanation: "صح، Decapsulation عند المستقبل." },

    // Tutorial 3 - TCP Socket
    { type: "mcq", question: "TCP is:", options: ["Connectionless", "Connection-oriented", "Faster than UDP", "Unreliable"], answer: 1, explanation: "TCP موجه للاتصال." },
    { type: "mcq", question: "UDP is:", options: ["Reliable", "Connection-oriented", "Connectionless", "Slower than TCP"], answer: 2, explanation: "UDP بدون اتصال." },
    { type: "mcq", question: "UDP is commonly used in:", options: ["File transfer", "Email", "Streaming", "Database systems"], answer: 2, explanation: "UDP للبث المباشر." },
    { type: "mcq", question: "TCP guarantees:", options: ["Data loss", "Ordered delivery", "Fast transmission only", "No error checking"], answer: 1, explanation: "TCP بيضمن الترتيب." },
    { type: "mcq", question: "Which package is used for network programming in Java?", options: ["java.io", "java.net", "java.util", "java.lang"], answer: 1, explanation: "java.net للشبكات." },
    { type: "mcq", question: "Which class is used to obtain the IP address?", options: ["Socket", "ServerSocket", "InetAddress", "URL"], answer: 2, explanation: "InetAddress للحصول على IP." },
    { type: "mcq", question: "What is the purpose of getByName(hostname)?", options: ["Get local IP", "Get IP of specified hostname", "Create socket", "Close socket"], answer: 1, explanation: "getByName بتجيب IP من اسم الجهاز." },
    { type: "mcq", question: "What does getLocalHost() return?", options: ["Port number", "Hostname", "IP address of local machine", "Server connection"], answer: 2, explanation: "بترجع IP الجهاز المحلي." },
    { type: "mcq", question: "Which class listens for incoming connections?", options: ["Socket", "ServerSocket", "DatagramSocket", "Scanner"], answer: 1, explanation: "ServerSocket بيستنى اتصالات." },
    { type: "mcq", question: "What is the primary purpose of ServerSocket?", options: ["Create client sockets", "Listen for incoming connections", "Handle DNS", "Encrypt data"], answer: 1, explanation: "ServerSocket على جانب السيرفر." },
    { type: "mcq", question: "Which method waits for client connection?", options: ["start()", "connect()", "accept()", "run()"], answer: 2, explanation: "accept() بتستنى الكلاينت." },
    { type: "mcq", question: "Which method puts server in waiting state?", options: ["getInputStream()", "accept()", "getOutputStream()", "close()"], answer: 1, explanation: "accept() للانتظار." },
    { type: "mcq", question: "Which class creates a TCP client connection?", options: ["ServerSocket", "Socket", "InetAddress", "URL"], answer: 1, explanation: "Socket على جانب الكلاينت." },
    { type: "mcq", question: "What is the purpose of getInputStream()?", options: ["Send data", "Receive data from client", "Close socket", "Establish connection"], answer: 1, explanation: "getInputStream للاستقبال." },
    { type: "mcq", question: "Which method displays sending data in TCP?", options: ["nextLine()", "println()", "accept()", "getLocalHost()"], answer: 1, explanation: "println للإرسال." },
    { type: "mcq", question: "What is the purpose of close()?", options: ["Establish connection", "Send data", "Close the connection", "Listen"], answer: 2, explanation: "close() بتقفل الاتصال." },
    { type: "mcq", question: "Which is true about UDP sockets?", options: ["Connection-oriented", "Guarantee delivery", "Faster than TCP", "Uses ServerSocket"], answer: 2, explanation: "UDP أسرع من TCP." },
    { type: "mcq", question: "Which class sends data through a socket?", options: ["Scanner", "PrintWriter", "BufferedReader", "FileWriter"], answer: 1, explanation: "PrintWriter للإرسال." },
    { type: "mcq", question: "Which class reads data from a socket?", options: ["Scanner", "PrintWriter", "ServerSocket", "URL"], answer: 0, explanation: "Scanner للقراءة." },
    { type: "tf", question: "The java.net package is used for network programming in Java.", options: ["True", "False"], answer: 0, explanation: "صح، java.net للشبكات." },
    { type: "tf", question: "The InetAddress class is used to retrieve IP addresses.", options: ["True", "False"], answer: 0, explanation: "صح، InetAddress بيجيب IPs." },
    { type: "tf", question: "InetAddress can retrieve local machine IP.", options: ["True", "False"], answer: 0, explanation: "صح، من خلال getLocalHost()." },
    { type: "tf", question: "ServerSocket is used to create client connections.", options: ["True", "False"], answer: 1, explanation: "غلط، ServerSocket على جانب السيرفر." },
    { type: "tf", question: "TCP sockets are connectionless.", options: ["True", "False"], answer: 1, explanation: "غلط، TCP Connection-oriented." },
    { type: "tf", question: "accept() method listens for incoming clients.", options: ["True", "False"], answer: 0, explanation: "صح، accept() للاستقبال." },
    { type: "tf", question: "getOutputStream() is used to receive data.", options: ["True", "False"], answer: 1, explanation: "غلط، getOutputStream للإرسال." },
    { type: "tf", question: "close() method terminates a socket connection.", options: ["True", "False"], answer: 0, explanation: "صح، close() بتقفل." },
    { type: "tf", question: "UDP sockets are more reliable than TCP.", options: ["True", "False"], answer: 1, explanation: "غلط، TCP أكثر موثوقية." },
    { type: "tf", question: "getLocalHost() returns local machine IP.", options: ["True", "False"], answer: 0, explanation: "صح، بترجع IP المحلي." },
    { type: "tf", question: "PrintWriter is used to read data from socket.", options: ["True", "False"], answer: 1, explanation: "غلط، PrintWriter للإرسال." },
    { type: "tf", question: "Scanner is used to send data in TCP.", options: ["True", "False"], answer: 1, explanation: "غلط، Scanner للقراءة." },
    { type: "tf", question: "Client must run before server.", options: ["True", "False"], answer: 1, explanation: "غلط، السيرفر الأول." },

    // Tutorial 4 - UDP
    { type: "mcq", question: "Primary characteristic of UDP sockets?", options: ["Connection-oriented", "Connectionless", "Reliable", "Slow"], answer: 1, explanation: "UDP بدون اتصال." },
    { type: "mcq", question: "UDP vs TCP truth?", options: ["UDP slower but more reliable", "UDP maintains connection", "UDP secure", "UDP faster but less reliable"], answer: 3, explanation: "UDP أسرع لكن أقل موثوقية." },
    { type: "mcq", question: "First step in UDP server setup?", options: ["Create buffer", "Accept datagram", "Retrieve data", "Create DatagramSocket"], answer: 3, explanation: "إنشاء DatagramSocket أول خطوة." },
    { type: "mcq", question: "Method to accept incoming datagram?", options: ["send()", "receive()", "getAddress()", "close()"], answer: 1, explanation: "receive() للاستقبال." },
    { type: "mcq", question: "Purpose of getAddress() in UDP?", options: ["Retrieve data", "Get sender's address", "Send response", "Close socket"], answer: 1, explanation: "getAddress بتجيب عنوان المرسل." },
    { type: "mcq", question: "Purpose of send() in UDP client?", options: ["Accept datagram", "Retrieve data", "Send datagram message", "Close socket"], answer: 2, explanation: "send() للإرسال." },
    { type: "mcq", question: "Step to close UDP socket?", options: ["send()", "receive()", "close()", "getAddress()"], answer: 2, explanation: "close() للإغلاق." },
    { type: "mcq", question: "Which class sends UDP datagrams?", options: ["ServerSocket", "Socket", "DatagramSocket", "InetAddress"], answer: 2, explanation: "DatagramSocket لـ UDP." },
    { type: "mcq", question: "Which class sends and receives UDP datagrams?", options: ["ServerSocket", "DatagramSocket", "Socket", "URL"], answer: 1, explanation: "DatagramSocket لـ UDP." },
    { type: "mcq", question: "What does DatagramPacket contain?", options: ["Only IP", "Only port", "Data and routing info", "Only hostname"], answer: 2, explanation: "بيحتوي على البيانات ومعلومات التوجيه." },
    { type: "mcq", question: "Default buffer for UDP data?", options: ["byte array", "String", "Scanner", "PrintWriter"], answer: 0, explanation: "byte array للتخزين." },
    { type: "tf", question: "Single DatagramSocket can handle multiple clients.", options: ["True", "False"], answer: 0, explanation: "صح، Socket واحد لكل الكلاينتس." },
    { type: "tf", question: "UDP is connection-oriented.", options: ["True", "False"], answer: 1, explanation: "غلط، UDP Connectionless." },
    { type: "tf", question: "UDP is faster than TCP but less reliable.", options: ["True", "False"], answer: 0, explanation: "صح، أسرع وأقل موثوقية." },
    { type: "tf", question: "receive() accepts incoming datagram.", options: ["True", "False"], answer: 0, explanation: "صح، receive للاستقبال." },
    { type: "tf", question: "getPort() retrieves data from buffer.", options: ["True", "False"], answer: 1, explanation: "غلط، getPort للبورت." },
    { type: "tf", question: "send() sends datagram in UDP client.", options: ["True", "False"], answer: 0, explanation: "صح، send للإرسال." },
    { type: "tf", question: "close() closes DatagramSocket.", options: ["True", "False"], answer: 0, explanation: "صح، close للإغلاق." },
    { type: "tf", question: "UDP is for reliability over speed.", options: ["True", "False"], answer: 1, explanation: "غلط، UDP للسرعة." },
    { type: "tf", question: "UDP doesn't need persistent connection.", options: ["True", "False"], answer: 0, explanation: "صح، UDP بدون اتصال مستمر." },
    { type: "tf", question: "DatagramPacket stores data and routing info.", options: ["True", "False"], answer: 0, explanation: "صح، فيه البيانات والتوجيه." },
    { type: "tf", question: "receive() sends datagrams.", options: ["True", "False"], answer: 1, explanation: "غلط، receive للاستقبال." },

    // Tutorial 5 - Multithreading
    { type: "mcq", question: "A thread is:", options: ["Independent program", "Lightweight unit of execution inside a process", "Hardware process", "Network protocol"], answer: 1, explanation: "Thread وحدة تنفيذ خفيفة." },
    { type: "mcq", question: "Why are threads used in servers?", options: ["Increase memory", "Handle multiple clients", "Reduce speed", "Stop communication"], answer: 1, explanation: "للتعامل مع كلاينتس كتير." },
    { type: "mcq", question: "Which method starts a new thread?", options: ["run()", "start()", "sleep()", "interrupt()"], answer: 1, explanation: "start() لبدء Thread." },
    { type: "mcq", question: "Which method pauses a thread?", options: ["wait()", "notify()", "sleep()", "run()"], answer: 2, explanation: "sleep() للإيقاف المؤقت." },
    { type: "mcq", question: "Which method breaks a sleeping thread?", options: ["stop()", "interrupt()", "notify()", "close()"], answer: 1, explanation: "interrupt() لإيقاظ Thread نايم." },
    { type: "mcq", question: "When many clients connect simultaneously, the server:", options: ["Processes sequentially", "Must process several hundred clients simultaneously", "Stops responding", "Closes connections"], answer: 1, explanation: "لازم يتعامل مع الكل في نفس الوقت." },
    { type: "mcq", question: "Limitation of extending Thread class?", options: ["Multiple inheritance", "No Runnable", "Reduces flexibility", "Prevents extending another class"], answer: 3, explanation: "Java مش بتدعم وراثة متعددة." },
    { type: "mcq", question: "Main limitation of extending Thread?", options: ["No concurrency", "No interfaces", "Java no multiple inheritance", "Reduces performance"], answer: 2, explanation: "Java مش بتدعم وراثة متعددة." },
    { type: "mcq", question: "When run() is called directly?", options: ["New thread", "Program stops", "Sleeps", "Executes sequentially in current thread"], answer: 3, explanation: "بينفذ في نفس Thread." },
    { type: "mcq", question: "What does Runnable represent?", options: ["Thread", "Task to be executed", "Process", "Memory"], answer: 1, explanation: "Runnable = المهمة." },
    { type: "mcq", question: "Best Runnable description?", options: ["Thread", "Task to be executed", "Controls scheduling", "Manages memory"], answer: 1, explanation: "المهمة الي بتتنفذ." },
    { type: "mcq", question: "Why implement Runnable over Thread?", options: ["Faster", "Better flexibility", "Multiple inheritance", "Avoids threading"], answer: 1, explanation: "مرونة أفضل في التصميم." },
    { type: "mcq", question: "Race condition?", options: ["Sequential threads", "Multiple threads accessing shared data", "Sudden stop", "Memory overflow"], answer: 1, explanation: "Threads بتوصل لنفس البيانات." },
    { type: "mcq", question: "Purpose of synchronized?", options: ["Speed", "One thread access at a time", "Stop threads", "Prevent waiting"], answer: 1, explanation: "Thread واحد بس بيدخل." },
    { type: "mcq", question: "What synchronized ensures?", options: ["Faster", "Only one thread accesses critical section", "Parallel", "Auto termination"], answer: 1, explanation: "Thread واحد في Critical Section." },
    { type: "mcq", question: "Worst-case with locks?", options: ["Faster", "Reduced efficiency", "Deadlock", "More memory"], answer: 2, explanation: "Deadlock أسوأ حاجة." },
    { type: "mcq", question: "Role of join()?", options: ["Starts", "Stops", "Waits for thread", "Synchronizes memory"], answer: 2, explanation: "join() بتستنى Thread يخلص." },
    { type: "mcq", question: "Role of join() in multithreading?", options: ["Starts", "Stops", "Waits for thread", "Synchronizes"], answer: 2, explanation: "join بتنتظر." },
    { type: "mcq", question: "What if synchronized is removed?", options: ["Crashes", "Stops", "Inconsistent output", "No change"], answer: 2, explanation: "النتائج بتبقى غير متسقة." },
    { type: "mcq", question: "Two-stage multithreaded server idea?", options: ["One thread for all", "Main thread assigns threads", "Clients create threads", "No interaction"], answer: 1, explanation: "Main Thread بيوزع Threads." },
    { type: "mcq", question: "Deadlock?", options: ["Fast", "Terminating", "Sharing memory", "Waiting forever for each other"], answer: 3, explanation: "Threads مستنية بعض للأبد." },
    { type: "mcq", question: "Best deadlock description?", options: ["Too fast", "Waiting indefinitely", "Not starting", "Losing data"], answer: 1, explanation: "استنى للأبد." },
    { type: "mcq", question: "Main benefit of multithreaded server?", options: ["Less memory", "Handle multiple clients", "Eliminate sync", "Simpler code"], answer: 1, explanation: "كلاينتس كتير في نفس الوقت." },
    { type: "mcq", question: "Why synchronized may give wrong output without join()?", options: ["Don't execute", "Too fast", "Main thread prints before threads finish", "Sync fails"], answer: 2, explanation: "Main بيطبع قبل ما الـ Threads تخلص." },
    { type: "tf", question: "Thread is lightweight unit inside process.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Threads share memory but each has own stack.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "start() creates new thread and executes run() concurrently.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Calling run() creates new concurrent thread.", options: ["True", "False"], answer: 1, explanation: "غلط، run مباشرة بينفذ في نفس Thread." },
    { type: "tf", question: "sleep() permanently stops thread.", options: ["True", "False"], answer: 1, explanation: "غلط، مؤقت." },
    { type: "tf", question: "interrupt() breaks sleeping/waiting thread.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Runnable=task, Thread=worker.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Java supports multiple inheritance.", options: ["True", "False"], answer: 1, explanation: "غلط." },
    { type: "tf", question: "Runnable more flexible than Thread.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "synchronized prevents race conditions.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "synchronized prevents multiple threads accessing method.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Multithreading eliminates all concurrency problems.", options: ["True", "False"], answer: 1, explanation: "غلط، ممكن تسبب مشاكل." },
    { type: "tf", question: "Deadlock is safe state.", options: ["True", "False"], answer: 1, explanation: "غلط، خطير." },
    { type: "tf", question: "join() ensures main thread waits.", options: ["True", "False"], answer: 0, explanation: "صح." },

    // Tutorial 6 - NIO
    { type: "mcq", question: "In blocking mode when function called?", options: ["Returns immediately", "Continues other tasks", "Stops and waits", "Async verification"], answer: 2, explanation: "بيوقف ويستنى." },
    { type: "mcq", question: "In blocking mode, executing thread is:", options: ["Shared", "Paused until data received", "Polling", "Reassigned"], answer: 1, explanation: "بيتوقف تماماً." },
    { type: "mcq", question: "InputStream.available() suffered from:", options: ["High throughput", "Multiplexing", "Size limits and memory overhead", "Low latency"], answer: 2, explanation: "محدود ومستهلك للذاكرة." },
    { type: "mcq", question: "In non-blocking mode, principle:", options: ["Must complete first", "Returns immediately even if not complete", "Blocked until data", "New thread per request"], answer: 1, explanation: "بترجع فوراً." },
    { type: "mcq", question: "Asynchronous verification means:", options: ["Immediate", "Continuous blocking", "System checks back later", "Auto threads"], answer: 2, explanation: "بيرجع يتشيك." },
    { type: "mcq", question: "Blocking systems:", options: ["Keep thread alive", "Return immediately", "Pause execution entirely", "Multiplex"], answer: 2, explanation: "بيوقف البرنامج." },
    { type: "mcq", question: "Java NIO introduced:", options: ["Byte streams", "Thread per client", "Block channels and buffers", "Blocking only"], answer: 2, explanation: "Channels و Buffers." },
    { type: "mcq", question: "Channels differ from streams because:", options: ["Single byte", "No buffers", "Massive blocks with buffers", "Blocking required"], answer: 2, explanation: "كتل كبيرة." },
    { type: "mcq", question: "Multiplexing refers to:", options: ["One thread per client", "One entity handling many connections", "Block all", "Sequential"], answer: 1, explanation: "كيان واحد بيتعامل مع كتير." },
    { type: "mcq", question: "In event registration channels:", options: ["Push to selector", "Register event type", "Create threads", "Ignore selector"], answer: 1, explanation: "بتسجل الحدث." },
    { type: "mcq", question: "How is ServerSocketChannel created?", options: ["Constructor", "newInstance()", "open() static", "Extending Thread"], answer: 2, explanation: "open() static." },
    { type: "mcq", question: "Method to activate non-blocking for ServerSocketChannel?", options: ["setNonBlocking(true)", "configureBlocking(false)", "enableAsync()", "setMode()"], answer: 1, explanation: "configureBlocking(false)." },
    { type: "mcq", question: "SelectionKey.OP_ACCEPT means:", options: ["Ready to read", "Ready to write", "Server ready to accept", "Connection finished"], answer: 2, explanation: "جاهز يقبل كلاينت." },
    { type: "mcq", question: "Purpose of Selector class?", options: ["New threads per client", "Monitor events", "Encrypt", "Allocate buffers"], answer: 1, explanation: "بيراقب الأحداث." },
    { type: "mcq", question: "SelectionKey.OP_READ means:", options: ["Accept connections", "Data available to read", "Idle", "Shutdown"], answer: 1, explanation: "بيانات للقراءة." },
    { type: "mcq", question: "selector.select() is used to:", options: ["Allocate buffers", "Wait for channels ready for I/O", "Create channels", "Bind ports"], answer: 1, explanation: "بتستنى Channels جاهزة." },
    { type: "tf", question: "Blocking mode: program stops until operation finishes.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Non-blocking forces thread to pause.", options: ["True", "False"], answer: 1, explanation: "غلط." },
    { type: "tf", question: "InputStream.available() was efficient.", options: ["True", "False"], answer: 1, explanation: "غلط." },
    { type: "tf", question: "Java NIO introduced java.nio package.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Multiplexing eliminates idle threads.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Blocking allows one thread for many operations.", options: ["True", "False"], answer: 1, explanation: "غلط، ده Non-blocking." },

    // Tutorial 7 - RMI Architecture
    { type: "mcq", question: "Primary purpose of Java RMI?", options: ["Improve single-machine performance", "Object-to-object between JVMs", "Replace serialization", "Standalone apps"], answer: 1, explanation: "تواصل بين JVMs." },
    { type: "mcq", question: "Client's proxy in RMI?", options: ["Skeleton", "RRL", "Stub", "Transport"], answer: 2, explanation: "Stub وكيل الكلاينت." },
    { type: "mcq", question: "In RMI, illusion refers to:", options: ["Hiding server", "Remote calls appear as local", "Remove network", "Encrypt"], answer: 1, explanation: "بتبان كأنها محلية." },
    { type: "mcq", question: "Where does skeleton reside?", options: ["Client", "Server", "Both", "Registry"], answer: 1, explanation: "على السيرفر." },
    { type: "mcq", question: "Purpose of RMI registry?", options: ["Compile objects", "Serialize params", "Lookup remote objects by name", "Handle failures"], answer: 2, explanation: "بحث بالاسم." },
    { type: "mcq", question: "Main role of RRL?", options: ["GUI", "Logical communication", "Store objects", "Compile"], answer: 1, explanation: "تواصل منطقي." },
    { type: "mcq", question: "Step that opens TCP socket?", options: ["Client Calls", "RRL Encodes", "Transport Sends", "Result Returns"], answer: 2, explanation: "Transport بيفتح Socket." },
    { type: "mcq", question: "Marshalling includes beside serialization?", options: ["Encryption", "Compression", "Method name and params", "DB storage"], answer: 2, explanation: "اسم Method والبارامترات." },
    { type: "mcq", question: "Layer for physical data transmission in RMI?", options: ["Application", "RRL", "Transport", "Registry"], answer: 2, explanation: "Transport للنقل." },
    { type: "mcq", question: "Serialization is:", options: ["Adding metadata", "Converting object to byte stream", "Sending TCP", "Encrypting"], answer: 1, explanation: "تحويل لـ Bytes." },
    { type: "mcq", question: "Which happens first in RMI?", options: ["Transport sends", "Server executes", "Client calls method", "Result returns"], answer: 2, explanation: "الكلاينت بيستدعي أول حاجة." },
    { type: "mcq", question: "What establishes reliable communication in RMI?", options: ["UDP", "TCP", "HTTP", "FTP"], answer: 1, explanation: "TCP." },
    { type: "mcq", question: "Where does actual method execute?", options: ["Client", "Stub", "Server object", "Registry"], answer: 2, explanation: "على السيرفر." },
    { type: "mcq", question: "After server executes method?", options: ["Connection closes", "Discarded", "Serialized and returned", "Registry updates"], answer: 2, explanation: "بيتحول وبيرجع." },
    { type: "mcq", question: "Transport layer NOT responsible for:", options: ["Sending", "Receiving", "Executing methods", "Managing connections"], answer: 2, explanation: "التنفيذ مش مسؤوليتها." },
    { type: "mcq", question: "Component hiding network complexity from client?", options: ["Stub", "Skeleton", "Transport", "Registry"], answer: 0, explanation: "Stub بيخفي التعقيد." },
    { type: "tf", question: "RMI allows objects in different JVMs to communicate as local.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Stub responsible for server-side invocation.", options: ["True", "False"], answer: 1, explanation: "غلط، Stub على الكلاينت." },
    { type: "tf", question: "All remote objects must extend UnicastRemoteObject.", options: ["True", "False"], answer: 1, explanation: "غلط، مش كلهم." },
    { type: "tf", question: "Marshaling includes serialization + protocol headers.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Transport Layer implements business logic.", options: ["True", "False"], answer: 1, explanation: "غلط." },
    { type: "tf", question: "RMI only for banking apps.", options: ["True", "False"], answer: 1, explanation: "غلط." },
    { type: "tf", question: "Serialization converts objects to XML.", options: ["True", "False"], answer: 1, explanation: "غلط، Byte Stream." },

    // Tutorial 8 - RMI Implementation
    { type: "mcq", question: "Essential Java packages for RMI?", options: ["java.net and java.io", "java.rmi, java.rmi.server, java.rmi.registry", "java.util and java.lang", "java.sql and java.nio"], answer: 1, explanation: "حزم RMI." },
    { type: "mcq", question: "Remote interface must extend?", options: ["Serializable", "java.rmi.Remote", "Runnable", "UnicastRemoteObject"], answer: 1, explanation: "java.rmi.Remote." },
    { type: "mcq", question: "Remote object implementation extends?", options: ["Naming", "UnicastRemoteObject", "RemoteException", "Registry"], answer: 1, explanation: "UnicastRemoteObject." },
    { type: "mcq", question: "Method to register object with RMI registry?", options: ["lookup()", "rebind()", "bind()", "unbind()"], answer: 1, explanation: "rebind() للتسجيل." },
    { type: "mcq", question: "Client uses what to get reference?", options: ["rebind()", "lookup()", "register()", "connect()"], answer: 1, explanation: "lookup()." },
    { type: "mcq", question: "Role of RMI registry?", options: ["Compile", "Naming service", "Security", "Serialize"], answer: 1, explanation: "Naming Service." },
    { type: "mcq", question: "Default RMI Registry port?", options: ["8080", "3306", "1099", "21"], answer: 2, explanation: "1099." },
    { type: "mcq", question: "Why remote methods throw RemoteException?", options: ["Performance", "Handle network failures", "Threads", "Serialize"], answer: 1, explanation: "للتعامل مع أعطال الشبكة." },
    { type: "tf", question: "Remote interface must extend java.rmi.Remote.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Client uses rebind() to lookup.", options: ["True", "False"], answer: 1, explanation: "غلط، lookup()." },
    { type: "tf", question: "lookup() returns reference of type Remote.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Client and server must reference using same URL.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "RMI uses UDP.", options: ["True", "False"], answer: 1, explanation: "غلط، TCP." },
  ],

  // ==================== CCNA 3 ====================
  c3: [
    { type: "mcq", question: "Which protocol prevents Layer 2 loops?", options: ["VTP", "STP", "DTP", "HSRP"], answer: 1, explanation: "STP بيمنع Loops في Layer 2." },
    { type: "mcq", question: "STP stands for:", options: ["Switch Transfer Protocol", "Spanning Tree Protocol", "Security Tree Protocol", "Standard Trunk Protocol"], answer: 1, explanation: "Spanning Tree Protocol." },
    { type: "mcq", question: "Purpose of STP?", options: ["Create VLANs", "Avoid Layer-2 loops", "Create trunks", "Save bandwidth"], answer: 1, explanation: "منع Loops في L2." },
    { type: "mcq", question: "STP is Cisco proprietary?", options: ["TRUE", "FALSE"], answer: 1, explanation: "غلط، STP معيار IEEE." },
    { type: "mcq", question: "First step in STP operation?", options: ["Select DP", "Select Root Bridge", "Select RP", "Block ports"], answer: 1, explanation: "أول خطوة Root Bridge." },
    { type: "mcq", question: "Max Root Ports per switch?", options: ["2", "None", "Unlimited", "1"], answer: 3, explanation: "Root Port واحد بس." },
    { type: "mcq", question: "Last step in STP?", options: ["Select RP", "Select Root Bridge", "Select DP", "Block non-root/non-DP"], answer: 3, explanation: "إقفال البورتات." },
    { type: "mcq", question: "STP elects root bridge by:", options: ["Bridge Priority", "IOS", "IP", "RAM"], answer: 0, explanation: "أقل Bridge Priority." },
    { type: "mcq", question: "Port selected on every non-root switch?", options: ["DP", "Root Port", "Blocked", "Access"], answer: 1, explanation: "Root Port." },
    { type: "mcq", question: "Root Bridge has:", options: ["Blocked Ports", "Root Ports", "All DPs", "Trunks only"], answer: 2, explanation: "كل بورتاته DPs." },
    { type: "mcq", question: "A blocked port in STP:", options: ["Forwards", "Prevents loops", "Creates loops", "Creates VLANs"], answer: 1, explanation: "بيمنع Loops." },
    { type: "mcq", question: "STP chooses paths based on:", options: ["Cost", "Bridge ID", "Port ID", "All"], answer: 3, explanation: "الكل." },
    { type: "mcq", question: "First criterion in blocked-port selection?", options: ["Sender Port ID", "Sender Bridge ID", "Root Path Cost", "Root Bridge ID"], answer: 3, explanation: "أقل Root Bridge ID." },
    { type: "mcq", question: "Second criterion?", options: ["Root Path Cost", "Sender Bridge ID", "Sender Port ID", "Highest Cost"], answer: 0, explanation: "Root Path Cost." },
    { type: "mcq", question: "Third criterion?", options: ["Root Bridge ID", "Sender Bridge ID", "Sender Port ID", "Port ID"], answer: 1, explanation: "Sender Bridge ID." },
    { type: "mcq", question: "Final criterion?", options: ["Sender Port ID", "Lowest Cost", "Highest Cost", "VLAN ID"], answer: 0, explanation: "Sender Port ID." },
    { type: "mcq", question: "EtherChannel combines:", options: ["VLANs", "Routers", "Multiple physical links", "IPs"], answer: 2, explanation: "روابط فيزيائية." },
    { type: "mcq", question: "Main benefit of EtherChannel?", options: ["Decrease bandwidth", "Increase bandwidth", "Remove VLANs", "Latency"], answer: 1, explanation: "زيادة Bandwidth." },
    { type: "mcq", question: "STP treats EtherChannel as:", options: ["Multiple links", "Separate VLANs", "One logical link", "One switch"], answer: 2, explanation: "رابط منطقي واحد." },
    { type: "mcq", question: "Cisco proprietary EtherChannel protocol?", options: ["LACP", "STP", "PAgP", "VRRP"], answer: 2, explanation: "PAgP." },
    { type: "mcq", question: "IEEE standard EtherChannel?", options: ["PAgP", "LACP", "HSRP", "DTP"], answer: 1, explanation: "LACP." },
    { type: "mcq", question: "PAgP modes?", options: ["Active/Passive", "Auto/Desirable", "Server/Client", "Root/Designated"], answer: 1, explanation: "Auto و Desirable." },
    { type: "mcq", question: "LACP modes?", options: ["Auto/Desirable", "Server/Client", "Active/Passive", "Root/Backup"], answer: 2, explanation: "Active و Passive." },
    { type: "mcq", question: "EtherChannel provides:", options: ["Redundancy", "Load Balancing", "More Bandwidth", "All"], answer: 3, explanation: "كل اللي فوق." },
    { type: "mcq", question: "Why use EtherChannel?", options: ["Reduce cost", "Increase bandwidth", "Block traffic", "Change IP"], answer: 1, explanation: "زيادة Bandwidth." },
    { type: "mcq", question: "Max ports in one EtherChannel?", options: ["4", "6", "8", "10"], answer: 2, explanation: "8 ports." },
    { type: "mcq", question: "Can mix Fast and Gigabit in EtherChannel?", options: ["Yes", "No", "Sometimes", "Only LACP"], answer: 1, explanation: "لازم نفس السرعة." },
    { type: "mcq", question: "PAgP 'desirable' mode?", options: ["Passive", "Active negotiation", "Disabled", "Manual"], answer: 1, explanation: "تفاوض نشط." },
    { type: "mcq", question: "Load balancing means?", options: ["Block", "Distribute", "Errors", "Reduce"], answer: 1, explanation: "توزيع." },
    { type: "mcq", question: "If one link fails in EtherChannel?", options: ["Stops", "Others continue", "All fail", "STP blocks"], answer: 1, explanation: "الباقي بيكمل." },
    { type: "mcq", question: "Ports in EtherChannel must have same:", options: ["IP", "Speed and duplex", "Name", "MAC"], answer: 1, explanation: "السرعة والـ Duplex." },
    { type: "mcq", question: "Both sides 'auto' in PAgP?", options: ["Works", "Fails", "Faster", "Secure"], answer: 1, explanation: "مش هيتكون." },
    { type: "mcq", question: "LACP 'passive' mode?", options: ["Initiates", "Responds only", "Disabled", "Fast"], answer: 1, explanation: "بيرد بس." },
    { type: "mcq", question: "EtherChannel improves:", options: ["Security", "Bandwidth and redundancy", "IP", "DNS"], answer: 1, explanation: "Bandwidth و Redundancy." },
    { type: "mcq", question: "VLAN stands for:", options: ["Virtual Local Area Network", "Virtual Link Access", "Variable LAN", "Virtual Logical Access"], answer: 0, explanation: "VLAN." },
    { type: "mcq", question: "VLANs reduce:", options: ["Routing", "Broadcast Traffic", "Security", "IPs"], answer: 1, explanation: "Broadcast." },
    { type: "mcq", question: "Access ports belong to:", options: ["Multiple VLANs", "One VLAN only", "No VLAN", "Two VLANs"], answer: 1, explanation: "VLAN واحدة." },
    { type: "mcq", question: "Trunk ports carry:", options: ["One VLAN", "Multiple VLANs", "No VLANs", "Management only"], answer: 1, explanation: "VLANs متعددة." },
    { type: "mcq", question: "Trunk tagging standard?", options: ["802.11", "802.1Q", "802.3", "802.5"], answer: 1, explanation: "802.1Q." },
    { type: "mcq", question: "VLAN improves:", options: ["Security", "Performance", "Management", "All"], answer: 3, explanation: "كل اللي فوق." },
    { type: "mcq", question: "Access port carries:", options: ["Multiple VLANs", "One VLAN", "No VLAN", "All VLANs"], answer: 1, explanation: "VLAN واحدة." },
    { type: "mcq", question: "With VLAN, switch acts like:", options: ["Router", "Multiple switches", "Hub", "Server"], answer: 1, explanation: "كذا سويتش." },
    { type: "mcq", question: "VTP stands for:", options: ["VLAN Trunking Protocol", "Virtual Trunk", "VLAN Transfer", "Virtual Transfer"], answer: 0, explanation: "VTP." },
    { type: "mcq", question: "Purpose of VTP?", options: ["Manage VLAN info", "Assign IPs", "Route packets", "Encrypt"], answer: 0, explanation: "إدارة VLANs." },
    { type: "mcq", question: "Which VTP mode creates VLANs?", options: ["Client", "Transparent", "Server", "Auto"], answer: 2, explanation: "Server بس." },
    { type: "mcq", question: "VTP mode that cannot create VLANs?", options: ["Server", "Client", "Transparent", "Root"], answer: 1, explanation: "Client مش يقدر." },
    { type: "mcq", question: "VTP revision number increases when?", options: ["Reboot", "VLAN changes", "Power off", "STP recalc"], answer: 1, explanation: "تغيير VLAN." },
    { type: "mcq", question: "VTP domain must be:", options: ["Different", "Same", "Random", "Empty"], answer: 1, explanation: "نفس الـ Domain." },
    { type: "mcq", question: "VTP server:", options: ["Receives only", "Sends VLAN info", "Blocks", "Deletes"], answer: 1, explanation: "بيبعت VLANs." },
    { type: "mcq", question: "VTP client:", options: ["Sends", "Receives VLAN info", "Deletes", "Ignores"], answer: 1, explanation: "بيستقبل بس." },
    { type: "mcq", question: "VTP reduces:", options: ["Security", "Admin work", "Speed", "Cost"], answer: 1, explanation: "شغل الإدارة." },
    { type: "mcq", question: "Revision number increases when?", options: ["Restart", "VLAN change", "Shutdown", "Login"], answer: 1, explanation: "تغيير VLAN." },
    { type: "mcq", question: "DTP stands for:", options: ["Dynamic Trunking Protocol", "Data Trunk", "Dynamic Transfer", "Default Trunk"], answer: 0, explanation: "DTP." },
    { type: "mcq", question: "DTP is used to:", options: ["Create VLANs", "Negotiate trunk links", "Assign IPs", "Prevent loops"], answer: 1, explanation: "تفاوض Trunk." },
    { type: "mcq", question: "DTP is used for:", options: ["Routing", "VLAN negotiation", "Trunk negotiation"], answer: 2, explanation: "تفاوض Trunk." },
    { type: "mcq", question: "Dynamic Auto mode is:", options: ["Active", "Passive", "Server", "Root"], answer: 1, explanation: "Passive." },
    { type: "mcq", question: "Dynamic Desirable mode is:", options: ["Passive", "Client", "Active", "Standby"], answer: 2, explanation: "Active." },
    { type: "mcq", question: "Auto + Auto =", options: ["Trunk", "No Trunk", "EtherChannel", "VLAN"], answer: 1, explanation: "محدش بيبادر." },
    { type: "mcq", question: "Desirable + Auto =", options: ["No Trunk", "VLAN", "Trunk", "Loop"], answer: 2, explanation: "Trunk." },
    { type: "mcq", question: "Dynamic desirable + auto =", options: ["Access", "Trunk", "Fail", "Disable"], answer: 1, explanation: "Trunk." },
    { type: "mcq", question: "FHRP stands for:", options: ["First Hop Redundancy Protocol", "Fast Hop Routing", "First Host Redundancy", "Fast Host Routing"], answer: 0, explanation: "FHRP." },
    { type: "mcq", question: "FHRP provides:", options: ["Routing updates", "Gateway redundancy", "VLAN management", "Loop prevention"], answer: 1, explanation: "Gateway احتياطي." },
    { type: "mcq", question: "FHRP works on:", options: ["L1", "L2", "L3", "L4"], answer: 2, explanation: "Layer 3." },
    { type: "mcq", question: "FHRP improves:", options: ["Security", "Availability", "Cost", "VLAN"], answer: 1, explanation: "Availability." },
    { type: "mcq", question: "Main goal of FHRP?", options: ["Speed", "Redundancy", "VLAN", "DNS"], answer: 1, explanation: "Redundancy." },
    { type: "mcq", question: "FHRP prevents:", options: ["Delay", "Single point failure", "Loop", "Error"], answer: 1, explanation: "Single Point of Failure." },
    { type: "mcq", question: "HSRP stands for:", options: ["Hot Standby Router Protocol", "Host Standby", "Hot Switch", "High Security"], answer: 0, explanation: "HSRP." },
    { type: "mcq", question: "HSRP uses:", options: ["Physical IP", "Virtual IP", "Broadcast", "Loopback"], answer: 1, explanation: "Virtual IP." },
    { type: "mcq", question: "Which router forwards traffic in HSRP?", options: ["Standby", "Active", "Backup", "Root"], answer: 1, explanation: "Active." },
    { type: "mcq", question: "Which takes over if active fails?", options: ["Root", "Client", "Standby", "Edge"], answer: 2, explanation: "Standby." },
    { type: "mcq", question: "Default HSRP priority?", options: ["50", "75", "100", "120"], answer: 2, explanation: "100." },
    { type: "mcq", question: "Higher HSRP priority means:", options: ["Lower chance", "Higher chance to be active", "Becomes standby", "Disabled"], answer: 1, explanation: "أعلى فرصة." },
    { type: "mcq", question: "Preemption allows:", options: ["Shutdown", "VLAN deletion", "Higher priority regains active", "STP recalc"], answer: 2, explanation: "الأعلى يرجع Active." },
    { type: "mcq", question: "In HSRP, active router:", options: ["Backup", "Forwarding traffic", "Idle", "Disabled"], answer: 1, explanation: "بيمرر البيانات." },
    { type: "mcq", question: "In HSRP, standby router:", options: ["Off", "Backup", "Main", "Router"], answer: 1, explanation: "احتياطي." },
    { type: "mcq", question: "Preemption for HSRP means:", options: ["Stop", "Re-election", "Delay", "Fail"], answer: 1, explanation: "إعادة انتخاب." },
    { type: "mcq", question: "If active router fails in HSRP?", options: ["Network stops", "Standby becomes active", "IP changes", "VLAN removed"], answer: 1, explanation: "Standby بياخد مكانه." },
    { type: "mcq", question: "Standby router monitors:", options: ["Ping", "Hello messages", "VLAN", "ARP"], answer: 1, explanation: "Hello Messages." },
    { type: "mcq", question: "HSRP priority range?", options: ["1-100", "0-255", "50-200", "10-100"], answer: 1, explanation: "0-255." },
    { type: "mcq", question: "Equal priority HSRP, decision by?", options: ["Speed", "IP address", "VLAN", "MAC"], answer: 1, explanation: "أعلى IP." },
    { type: "mcq", question: "Gateway IP used by host in HSRP?", options: ["Physical", "Virtual", "Random", "Static"], answer: 1, explanation: "Virtual IP." },
    { type: "mcq", question: "HSRP hold time default?", options: ["3 sec", "5 sec", "10 sec", "20 sec"], answer: 2, explanation: "10 ثواني." },
    { type: "mcq", question: "HSRP hello time default?", options: ["1 sec", "3 sec", "5 sec", "10 sec"], answer: 1, explanation: "3 ثواني." },
    { type: "mcq", question: "Highest HSRP priority becomes:", options: ["Standby", "Active", "Disabled", "Client"], answer: 1, explanation: "Active." },
    { type: "mcq", question: "VRRP stands for:", options: ["Virtual Router Redundancy Protocol", "Virtual Routing Redundancy", "VLAN Router", "Virtual Routing Relay"], answer: 0, explanation: "VRRP." },
    { type: "mcq", question: "VRRP is:", options: ["Cisco proprietary", "Open standard", "Microsoft", "VLAN"], answer: 1, explanation: "معيار مفتوح." },
    { type: "mcq", question: "GLBP stands for:", options: ["Gateway Load Balancing Protocol", "Gateway Link Balancing", "Global Link Balancing", "Gateway Logical Backup"], answer: 0, explanation: "GLBP." },
    { type: "mcq", question: "Which provides load balancing?", options: ["HSRP", "VRRP", "GLBP", "STP"], answer: 2, explanation: "GLBP." },
    { type: "mcq", question: "GLBP provides:", options: ["Redundancy only", "Load balancing + redundancy", "Routing", "Security"], answer: 1, explanation: "الاتنين." },
    { type: "mcq", question: "Virtual Router contains:", options: ["Virtual IP and Virtual MAC", "VLAN and IP", "MAC only", "IP only"], answer: 0, explanation: "Virtual IP و MAC." },
    { type: "mcq", question: "Failover occurs when:", options: ["Active router fails", "VLAN changes", "STP blocks", "EtherChannel forms"], answer: 0, explanation: "Active يقع." },
    { type: "mcq", question: "Hosts use ARP to get:", options: ["IP", "MAC address", "VLAN", "Port"], answer: 1, explanation: "MAC من IP." },
  ],

  // ==================== MOBILE PROGRAMMING ====================
  mp: [
    // Flutter Concepts
    { type: "mcq", question: "What is Flutter?", options: ["Database system", "Open-source UI toolkit by Google for cross-platform apps", "Language by Apple", "Web browser"], answer: 1, explanation: "Flutter UI toolkit من Google." },
    { type: "mcq", question: "Why is Flutter popular?", options: ["Slow development", "Fast development, single codebase, high performance", "Only web", "Only Android"], answer: 1, explanation: "تطوير سريع وكود واحد." },
    { type: "mcq", question: "What language is used in Flutter?", options: ["Java", "Kotlin", "Dart", "Swift"], answer: 2, explanation: "Dart." },
    { type: "mcq", question: "How does Flutter support cross-platform?", options: ["JavaScript", "Compiles Dart to native machine code", "Web tech", "Separate code"], answer: 1, explanation: "بيكومبايل لكود Native." },
    { type: "mcq", question: "Cross-platform application?", options: ["One OS", "One codebase, multiple OS", "Hardware-specific", "Web-only"], answer: 1, explanation: "كود واحد لكذا نظام." },
    { type: "mcq", question: "Native application?", options: ["All platforms", "Built for one platform", "Web-based", "Cross-platform"], answer: 1, explanation: "لمنصة واحدة." },
    { type: "mcq", question: "Main advantage of cross-platform?", options: ["Better performance", "Saves time and cost", "More native features", "Larger size"], answer: 1, explanation: "يوفر وقت وتكلفة." },
    { type: "mcq", question: "Main advantage of native?", options: ["Slower", "Better performance and device integration", "Single code", "Lower cost"], answer: 1, explanation: "أداء أحسن." },
    { type: "mcq", question: "Performance difference?", options: ["Cross faster", "Native faster, cross may have overhead", "Identical", "Native slower"], answer: 1, explanation: "Native أسرع." },
    { type: "mcq", question: "Best for high-performance apps?", options: ["Cross-platform", "Native development", "Web", "Hybrid"], answer: 1, explanation: "Native للأداء." },
    { type: "mcq", question: "Drawbacks of native?", options: ["Single code", "More time, cost, separate codebases", "Less performance", "No device access"], answer: 1, explanation: "وقت وتكلفة أكتر." },
    { type: "mcq", question: "Drawbacks of cross-platform?", options: ["Faster than native", "Slight performance issues, limited native features", "No code reuse", "Higher cost"], answer: 1, explanation: "أداء أقل قليلاً." },
    { type: "mcq", question: "What is a widget?", options: ["Database", "Building block of UI", "Network protocol", "Backend"], answer: 1, explanation: "وحدة بناء الـ UI." },
    { type: "mcq", question: "Stateless widget?", options: ["Changes constantly", "No changing state", "Has database", "Animations only"], answer: 1, explanation: "ثابت." },
    { type: "mcq", question: "Stateful widget?", options: ["Never changes", "Can update UI dynamically", "No UI", "Backend only"], answer: 1, explanation: "بيتغير." },
    { type: "mcq", question: "When use Stateless?", options: ["UI changes", "UI doesn't change", "Animations", "User input"], answer: 1, explanation: "لما الـ UI ثابت." },
    { type: "mcq", question: "When use Stateful?", options: ["Static text", "UI changes by interaction or data", "Images only", "Never"], answer: 1, explanation: "لما الـ UI بيتغير." },
    { type: "mcq", question: "Purpose of main() in Flutter?", options: ["End program", "Entry point of application", "A widget", "For animations"], answer: 1, explanation: "نقطة البداية." },
    { type: "mcq", question: "What does runApp() do?", options: ["Closes app", "Starts Flutter app and loads root widget", "Creates DB", "Compiles"], answer: 1, explanation: "بتشغل التطبيق." },
    { type: "mcq", question: "What must be passed to runApp()?", options: ["String", "A widget (root widget)", "Function", "Number"], answer: 1, explanation: "Widget." },
    { type: "mcq", question: "What is the root widget?", options: ["Last widget", "First widget that starts UI (e.g., MaterialApp)", "Hidden", "Backend"], answer: 1, explanation: "أول Widget." },
    { type: "tf", question: "Flutter uses Java for development.", options: ["True", "False"], answer: 1, explanation: "غلط، Dart." },
    { type: "tf", question: "Flutter apps can run on multiple platforms.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Native apps use a single codebase.", options: ["True", "False"], answer: 1, explanation: "غلط، كود منفصل." },
    { type: "tf", question: "Cross-platform always performs better than native.", options: ["True", "False"], answer: 1, explanation: "غلط، Native أحسن." },
    { type: "tf", question: "Flutter compiles to native machine code.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Stateless widgets can change at runtime.", options: ["True", "False"], answer: 1, explanation: "غلط، ثابت." },
    { type: "tf", question: "Stateful widgets can rebuild UI when data changes.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Flutter is developed by Google.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Dart is optimized for UI development.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Native apps require more development time.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "main() is optional in Flutter.", options: ["True", "False"], answer: 1, explanation: "غلط، ضرورية." },
    { type: "tf", question: "runApp() must be called to start the app.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Flutter UI is built using XML files.", options: ["True", "False"], answer: 1, explanation: "غلط، Widgets." },
    { type: "tf", question: "Widgets can be nested inside each other.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Scaffold provides basic UI structure.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "tf", question: "Text is a layout widget.", options: ["True", "False"], answer: 1, explanation: "غلط، Text للنصوص." },
    { type: "tf", question: "Column arranges widgets horizontally.", options: ["True", "False"], answer: 1, explanation: "غلط، عمودياً." },
    { type: "tf", question: "Row arranges widgets horizontally.", options: ["True", "False"], answer: 0, explanation: "صح." },
    { type: "mcq", question: "Flutter is developed by:", options: ["Apple", "Microsoft", "Google", "IBM"], answer: 2, explanation: "Google." },
    { type: "mcq", question: "Flutter uses which language?", options: ["Java", "Kotlin", "Swift", "Dart"], answer: 3, explanation: "Dart." },
    { type: "mcq", question: "Stateless widget means:", options: ["UI changes", "UI never changes", "Has database", "Uses API"], answer: 1, explanation: "ثابت." },
    { type: "mcq", question: "Stateful widget used when:", options: ["UI static", "UI changes", "No interaction", "No rebuild"], answer: 1, explanation: "بيتغير." },
    { type: "mcq", question: "Cross-platform apps work on:", options: ["One OS", "Many OS", "Only Android", "Only iOS"], answer: 1, explanation: "أكتر من نظام." },
    { type: "mcq", question: "Entry point of Flutter app?", options: ["runApp()", "main()", "build()", "start()"], answer: 1, explanation: "main()." },
    { type: "mcq", question: "runApp() takes:", options: ["Function", "Widget", "String", "Class"], answer: 1, explanation: "Widget." },
    { type: "mcq", question: "Widget for page layout?", options: ["Text", "Scaffold", "Row", "Icon"], answer: 1, explanation: "Scaffold." },
    { type: "mcq", question: "Widget that centers child?", options: ["Column", "Center", "Row", "Container"], answer: 1, explanation: "Center." },
    { type: "mcq", question: "Widget that arranges children vertically?", options: ["Row", "Column", "Stack", "Center"], answer: 1, explanation: "Column." },
    { type: "mcq", question: "Identify: class MyApp extends StatelessWidget {...}", options: ["Stateful", "Stateless Widget", "Inherited", "Render"], answer: 1, explanation: "extends StatelessWidget." },
    { type: "mcq", question: "What does setState() do?", options: ["Deletes UI", "Updates UI in Stateful widget", "Creates app", "Closes app"], answer: 1, explanation: "بتحدث UI." },
    { type: "mcq", question: "Column with children [Text('A'),Text('B'),Text('C')] displays:", options: ["Horizontally", "Vertically top to bottom", "Only A", "Error"], answer: 1, explanation: "عمودياً." },
    { type: "mcq", question: "Row with children [Text('A'),Text('B'),Text('C')] displays:", options: ["Vertically", "Horizontally left to right", "Only A", "Error"], answer: 1, explanation: "أفقياً." },
    { type: "mcq", question: "Center(child: Text('Hello')) displays:", options: ["At top", "At bottom", "In center", "Error"], answer: 2, explanation: "في المنتصف." },
    { type: "mcq", question: "MainAxisAlignment.center in Column:", options: ["Texts at top", "Centered vertically", "Texts at bottom", "Error"], answer: 1, explanation: "موسط عمودياً." },
    { type: "mcq", question: "MainAxisAlignment.spaceBetween in Row [A,B]:", options: ["Together", "A left, B right with space", "Both center", "Error"], answer: 1, explanation: "A شمال B يمين." },
    { type: "mcq", question: "Container(padding: EdgeInsets.all(10), child: Text):", options: ["Removes text", "Adds space around text", "Changes color", "Error"], answer: 1, explanation: "يضيف padding." },
    { type: "mcq", question: "Container(color: Colors.red, child: Text):", options: ["Blue bg", "Red background with text", "No bg", "Error"], answer: 1, explanation: "خلفية حمراء." },
    { type: "mcq", question: "Expanded in Column with two children:", options: ["Only first shown", "Share screen height equally", "Error", "Only second shown"], answer: 1, explanation: "بيوزع المساحة." },

    // Dart - Part 1 (Q1-Q60)
    { type: "mcq", question: "int a=5,b=3; print(a+b);", options: ["8", "15", "53", "Error"], answer: 0, explanation: "5+3=8." },
    { type: "mcq", question: "double x=2.5; print(x is double);", options: ["false", "true", "Error", "null"], answer: 1, explanation: "x من نوع double." },
    { type: "mcq", question: "String name=\"Hala\"; print(name.length);", options: ["3", "4", "Error", "null"], answer: 1, explanation: "Hala 4 حروف." },
    { type: "mcq", question: "bool a=true,b=false; print(a&&b);", options: ["true", "false", "null", "Error"], answer: 1, explanation: "AND يحتاج الاتنين true." },
    { type: "mcq", question: "int a=10; a+=5; print(a);", options: ["5", "10", "15", "Error"], answer: 2, explanation: "10+5=15." },
    { type: "mcq", question: "int? a; print(a);", options: ["0", "null", "Error", "false"], answer: 1, explanation: "int? بدون قيمة = null." },
    { type: "mcq", question: "int a=5; print(a>3);", options: ["false", "true", "Error", "null"], answer: 1, explanation: "5>3 = true." },
    { type: "mcq", question: "var x=10; print(x.runtimeType);", options: ["double", "int", "String", "bool"], answer: 1, explanation: "10 صحيح فهو int." },
    { type: "mcq", question: "int? a; print(a??100);", options: ["null", "0", "100", "Error"], answer: 2, explanation: "a null فبيرجع 100." },
    { type: "mcq", question: "int a=5; print(a==5);", options: ["false", "true", "Error", "null"], answer: 1, explanation: "5==5 true." },
    { type: "mcq", question: "var name=\"Flutter\"; Type?", options: ["int", "String", "dynamic", "bool"], answer: 1, explanation: "String." },
    { type: "mcq", question: "dynamic x=5; x=\"Hello\"; print(x);", options: ["Error", "5", "Hello", "null"], answer: 2, explanation: "dynamic بيقبل أي نوع." },
    { type: "mcq", question: "late int a; a=10; print(a);", options: ["Error", "10", "null", "0"], answer: 1, explanation: "late بيتهيئ بعدين." },
    { type: "mcq", question: "const pi=3.14; pi=4;", options: ["Works", "Runtime error", "Compile error", "null"], answer: 2, explanation: "const مش بيتغير." },
    { type: "mcq", question: "final x=10; meaning?", options: ["Mutable", "Cannot change", "Null", "Dynamic"], answer: 1, explanation: "final مش بيتغير." },
    { type: "mcq", question: "print(10~/3);", options: ["3", "3.3", "Error", "4"], answer: 0, explanation: "~/ integer division." },
    { type: "mcq", question: "print(10%3);", options: ["1", "3", "0", "Error"], answer: 0, explanation: "باقي 10/3 = 1." },
    { type: "mcq", question: "int a=5; print(++a);", options: ["5", "6", "7", "Error"], answer: 1, explanation: "++a قبل الطباعة." },
    { type: "mcq", question: "int a=5; print(a++);", options: ["5", "6", "Error", "null"], answer: 0, explanation: "a++ بعد الطباعة." },
    { type: "mcq", question: "print(!(true));", options: ["true", "false", "Error", "null"], answer: 1, explanation: "NOT true = false." },
    { type: "mcq", question: "int? a; print(a??0);", options: ["null", "0", "Error", "false"], answer: 1, explanation: "a null فبيرجع 0." },
    { type: "mcq", question: "String? name; print(name?.length);", options: ["Error", "null", "0", "1"], answer: 1, explanation: "?. null-safe." },
    { type: "mcq", question: "int? a=5; print(a!);", options: ["Error", "5", "null", "false"], answer: 1, explanation: "! null assertion." },
    { type: "mcq", question: "int? a; a??=10; print(a);", options: ["null", "10", "Error", "0"], answer: 1, explanation: "??= بيعطي قيمة لو null." },
    { type: "mcq", question: "String? name=\"Flutter\"; print(name?.toUpperCase());", options: ["null", "FLUTTER", "Error", "flutter"], answer: 1, explanation: "بيحول لكبير." },
    { type: "mcq", question: "int x=5; if(x>3) print(\"Yes\");", options: ["No", "Yes", "Error", "null"], answer: 1, explanation: "الشرط true." },
    { type: "mcq", question: "int x=2; if(x>3) print(\"A\"); else print(\"B\");", options: ["A", "B", "Error", "null"], answer: 1, explanation: "2<3 فالـ else." },
    { type: "mcq", question: "for(int i=0;i<3;i++){print(i);} Last value?", options: ["1", "2", "3", "0"], answer: 1, explanation: "0,1,2 فآخر 2." },
    { type: "mcq", question: "int i=0; while(i<1){print(i); i++;}", options: ["0", "1", "Infinite", "Error"], answer: 0, explanation: "بيطبع 0 بس." },
    { type: "mcq", question: "Switch used for?", options: ["Loop", "Multiple conditions", "Function", "Variable"], answer: 1, explanation: "شروط متعددة." },
    { type: "mcq", question: "int add(int a,int b){return a+b;} print(add(2,3));", options: ["5", "23", "Error", "null"], answer: 0, explanation: "2+3=5." },
    { type: "mcq", question: "int add(int a,int b)=>a+b; meaning?", options: ["Loop", "Short function syntax", "Null operator", "Widget"], answer: 1, explanation: "Arrow function." },
    { type: "mcq", question: "Named param example?", options: ["add(1,2)", "add(a:1,b:2)", "add()", "Error"], answer: 1, explanation: "a: b: لـ named." },
    { type: "mcq", question: "void greet([String name=\"User\"]){print(name);} greet();", options: ["Error", "User", "null", "name"], answer: 1, explanation: "بيستخدم default." },
    { type: "mcq", question: "Required named keyword?", options: ["final", "required", "late", "const"], answer: 1, explanation: "required keyword." },
    { type: "mcq", question: "var x=5; x*=2; print(x);", options: ["10", "5", "Error", "null"], answer: 0, explanation: "5*2=10." },
    { type: "mcq", question: "int? a; print(a==null);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "a null فعلاً." },
    { type: "mcq", question: "print(5>3&&2>1);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "الاتنين true." },
    { type: "mcq", question: "print(5<3||2>1);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "OR واحدة true كفاية." },
    { type: "mcq", question: "int a=5; print(a is! String);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "a مش String." },
    { type: "mcq", question: "var list=[1,2,3]; print(list.length);", options: ["3", "2", "Error", "null"], answer: 0, explanation: "3 عناصر." },
    { type: "mcq", question: "String s=\"Hi\"; s+=\" Flutter\"; print(s);", options: ["Hi Flutter", "Hi", "Error", "null"], answer: 0, explanation: "بيتجمعوا." },
    { type: "mcq", question: "bool? x; print(x??false);", options: ["false", "true", "Error", "null"], answer: 0, explanation: "x null فبيرجع false." },
    { type: "mcq", question: "int a=10; print(a~/4);", options: ["2", "3", "Error", "null"], answer: 0, explanation: "10/4=2 صحيح." },
    { type: "mcq", question: "int a=5; print(a>=5);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "5>=5 true." },
    { type: "mcq", question: "int square(int x)=>x*x; print(square(3));", options: ["9", "6", "Error", "null"], answer: 0, explanation: "3*3=9." },
    { type: "mcq", question: "var x; print(x);", options: ["null", "0", "Error", "false"], answer: 0, explanation: "بدون قيمة null." },
    { type: "mcq", question: "int? a=null; print(a??50);", options: ["50", "null", "Error", "0"], answer: 0, explanation: "a null." },
    { type: "mcq", question: "String name=\"dart\"; print(name.toUpperCase());", options: ["DART", "dart", "Error", "null"], answer: 0, explanation: "DART." },
    { type: "mcq", question: "int a=1; a++; print(a);", options: ["2", "1", "Error", "null"], answer: 0, explanation: "1+1=2." },
    { type: "mcq", question: "print(3*2+1);", options: ["7", "6", "Error", "null"], answer: 0, explanation: "6+1=7." },
    { type: "mcq", question: "print((3*(2+1)));", options: ["9", "6", "Error", "null"], answer: 0, explanation: "3*3=9." },
    { type: "mcq", question: "int? a; print(a?.isEven);", options: ["null", "true", "Error", "false"], answer: 0, explanation: "a null فـ ?. null." },
    { type: "mcq", question: "int a=5; if(a.isEven) print(\"even\"); else print(\"odd\");", options: ["odd", "even", "Error", "null"], answer: 0, explanation: "5 فردي." },
    { type: "mcq", question: "int add({required int a,required int b})=>a+b; print(add(a:1,b:2));", options: ["3", "2", "Error", "null"], answer: 0, explanation: "1+2=3." },
    { type: "mcq", question: "String? name; name??=\"Guest\"; print(name);", options: ["Guest", "null", "Error", "0"], answer: 0, explanation: "null فبياخد Guest." },
    { type: "mcq", question: "int a=5; print(a is int);", options: ["true", "false", "Error", "null"], answer: 0, explanation: "int فعلاً." },
    { type: "mcq", question: "print(5==\"5\");", options: ["false", "true", "Error", "null"], answer: 0, explanation: "أنواع مختلفة." },
    { type: "mcq", question: "int? a=5; print(a!+1);", options: ["6", "5", "Error", "null"], answer: 0, explanation: "5+1=6." },
    { type: "mcq", question: "void greet()=>print(\"Hello\"); greet();", options: ["Hello", "Hi", "Error", "null"], answer: 0, explanation: "Hello." },

    // Dart Lists, Sets, Maps & Spread
    { type: "mcq", question: "var list=[1,2,3]; print(list.first);", options: ["1", "2", "3", "Error"], answer: 0, explanation: "أول عنصر 1." },
    { type: "mcq", question: "var list=[1,2,3]; print(list.last);", options: ["1", "2", "3", "Error"], answer: 2, explanation: "آخر عنصر 3." },
    { type: "mcq", question: "var list=[1,2]; list.add(3); print(list);", options: ["[1,2]", "[1,2,3]", "[3,1,2]", "Error"], answer: 1, explanation: "add في الآخر." },
    { type: "mcq", question: "var list=[1,2,3]; list.remove(2); print(list);", options: ["[1,3]", "[2,3]", "[1,2]", "Error"], answer: 0, explanation: "بيشيل 2." },
    { type: "mcq", question: "var set={1,2,3}; set.add(2); print(set.length);", options: ["2", "3", "4", "Error"], answer: 1, explanation: "Set مفيش تكرار." },
    { type: "mcq", question: "var map={\"a\":1,\"b\":2}; print(map[\"a\"]);", options: ["1", "2", "null", "Error"], answer: 0, explanation: "a=1." },
    { type: "mcq", question: "var map={\"a\":1}; map[\"b\"]=2; print(map);", options: ["{a:1}", "{a:1,b:2}", "{b:2}", "Error"], answer: 1, explanation: "add key." },
    { type: "mcq", question: "var set={1,2,3}; print(set.contains(2));", options: ["true", "false", "null", "Error"], answer: 0, explanation: "موجود." },
    { type: "mcq", question: "var list=[1,2,3]; print(list.length);", options: ["2", "3", "4", "Error"], answer: 1, explanation: "3 عناصر." },
    { type: "mcq", question: "var list=[1,2,3]; list.clear(); print(list);", options: ["[]", "[1,2,3]", "null", "Error"], answer: 0, explanation: "clear فارغة." },
    { type: "mcq", question: "What does ... do?", options: ["Loop", "Spread elements", "Remove elements", "Convert list"], answer: 1, explanation: "Spread operator." },
    { type: "mcq", question: "var a=[1,2]; var b=[...a,3]; print(b);", options: ["[1,2,3]", "[3,1,2]", "[[1,2],3]", "Error"], answer: 0, explanation: "spread a + 3." },
    { type: "mcq", question: "var a=[1,2]; var b=[0,...a]; print(b);", options: ["[0,1,2]", "[1,2,0]", "[[1,2],0]", "Error"], answer: 0, explanation: "0 ثم a." },
    { type: "mcq", question: "var a=[1,2]; var b=[...a,...a]; print(b);", options: ["[1,2]", "[1,2,1,2]", "[[1,2],[1,2]]", "Error"], answer: 1, explanation: "a مرتين." },
    { type: "mcq", question: "List<int>? a=null; var list=[1,...?a]; print(list);", options: ["[1]", "null", "Error", "[]"], answer: 0, explanation: "?... null safe." },
    { type: "mcq", question: "var list=[1,2]; var newList=[...list]; print(newList==list);", options: ["true", "false", "null", "Error"], answer: 1, explanation: "reference مختلفة." },
    { type: "mcq", question: "var list=[1,2]; var newList=[...list]; list.add(3); print(newList);", options: ["[1,2,3]", "[1,2]", "[]", "Error"], answer: 1, explanation: "newList نسخة منفصلة." },
    { type: "mcq", question: "var set={1,2}; var newSet={...set,3}; print(newSet);", options: ["{1,2,3}", "{3,1,2}", "{1,2}", "Error"], answer: 0, explanation: "spread + 3." },
    { type: "mcq", question: "var map={\"a\":1}; var newMap={...map,\"b\":2}; print(newMap);", options: ["{a:1,b:2}", "{b:2}", "{a:1}", "Error"], answer: 0, explanation: "spread map + b." },
    { type: "mcq", question: "Duplicate keys in spread maps?", options: ["Error", "Last value overrides", "First overrides", "Both stored"], answer: 1, explanation: "آخر قيمة بتفوز." },
    { type: "mcq", question: "var a=true; var list=[1, if(a) 2]; print(list);", options: ["[1]", "[1,2]", "[2]", "Error"], answer: 1, explanation: "a true فبيضيف 2." },
    { type: "mcq", question: "var a=false; var list=[1, if(a) 2]; print(list);", options: ["[1]", "[1,2]", "[2]", "Error"], answer: 0, explanation: "a false." },
    { type: "mcq", question: "var a=true; var list=[1, if(a) 2 else 3]; print(list);", options: ["[1,2]", "[1,3]", "[2]", "Error"], answer: 0, explanation: "a true فـ 2." },
    { type: "mcq", question: "var a=false; var list=[1, if(a) 2 else 3]; print(list);", options: ["[1,2]", "[1,3]", "[3]", "Error"], answer: 1, explanation: "a false فـ 3." },
    { type: "mcq", question: "var a=true; var list=[1, if(a) ...[2,3]]; print(list);", options: ["[1,2,3]", "[1,2]", "[2,3]", "Error"], answer: 0, explanation: "spread إن true." },
    { type: "mcq", question: "var a=false; var list=[1, if(a) ...[2,3]]; print(list);", options: ["[1]", "[2,3]", "[1,2,3]", "Error"], answer: 0, explanation: "a false." },
    { type: "mcq", question: "var a=true; var list=[...[1,2], if(a) 3]; print(list);", options: ["[1,2,3]", "[3,1,2]", "[1,2]", "Error"], answer: 0, explanation: "spread + 3." },
    { type: "mcq", question: "var a=false; var list=[...[1,2], if(a) 3]; print(list);", options: ["[1,2]", "[3]", "[1]", "Error"], answer: 0, explanation: "a false." },
    { type: "mcq", question: "var list=[1, if(true) 2 else 3]; print(list.length);", options: ["1", "2", "3", "Error"], answer: 1, explanation: "عنصرين." },
    { type: "mcq", question: "var list=[if(false) 1 else 2]; print(list);", options: ["[1]", "[2]", "[]", "Error"], answer: 1, explanation: "else." },

    // Named & Positional Parameters
    { type: "mcq", question: "What are positional parameters?", options: ["Ordered", "Named", "Optional", "Constant"], answer: 0, explanation: "بالترتيب." },
    { type: "mcq", question: "Named parameters written inside?", options: ["()", "{}", "[]", "<>"], answer: 1, explanation: "داخل {}." },
    { type: "mcq", question: "void show(int a, int b){print(a+b);} show(2,3);", options: ["5", "6", "23", "Error"], answer: 0, explanation: "2+3=5." },
    { type: "mcq", question: "void show({int a=1,int b=2}){print(a+b);} show();", options: ["3", "1", "2", "Error"], answer: 0, explanation: "default 1+2=3." },
    { type: "mcq", question: "void show({int a=1,int b=2}){print(a+b);} show(a:3);", options: ["3", "5", "4", "Error"], answer: 1, explanation: "3+2=5." },
    { type: "mcq", question: "void show(int a,{int b=2}){print(a+b);} show(3);", options: ["5", "3", "2", "Error"], answer: 0, explanation: "3+2=5." },
    { type: "mcq", question: "void show(int a,{required int b}){print(a+b);} show(2,b:3);", options: ["5", "6", "23", "Error"], answer: 0, explanation: "2+3=5." },
    { type: "mcq", question: "Required parameter not provided?", options: ["Runtime error", "Compile error", "Null", "Default"], answer: 1, explanation: "Compile error." },
    { type: "mcq", question: "Named params default?", options: ["required", "optional", "constant", "static"], answer: 1, explanation: "optional." },
    { type: "mcq", question: "Positional params must follow?", options: ["Any order", "Defined order", "Alphabetical", "Random"], answer: 1, explanation: "الترتيب المحدد." },

    // Late & Final
    { type: "mcq", question: "What does late mean?", options: ["Immediate init", "Delayed initialization", "Constant", "Immutable"], answer: 1, explanation: "تأخير التهيئة." },
    { type: "mcq", question: "late int a; a=5; print(a);", options: ["5", "null", "Error", "0"], answer: 0, explanation: "بعد التهيئة 5." },
    { type: "mcq", question: "late int a; print(a);", options: ["0", "null", "Runtime error", "Compile error"], answer: 2, explanation: "بدون قيمة Runtime error." },
    { type: "mcq", question: "Purpose of late?", options: ["Delay initialization", "Improve loops", "Create constants", "Avoid functions"], answer: 0, explanation: "تأخير التهيئة." },
    { type: "mcq", question: "Type commonly using late in Flutter?", options: ["Widgets", "Controllers", "Variables", "Loops"], answer: 1, explanation: "Controllers." },

    // More Dart questions
    { type: "mcq", question: "var a=[1,2]; var b=[...a]; a.add(3); print(b);", options: ["[1,2,3]", "[1,2]", "[]", "Error"], answer: 1, explanation: "b نسخة منفصلة." },
    { type: "mcq", question: "var set={1,2,3}; var s={...set,3}; print(s.length);", options: ["3", "4", "2", "Error"], answer: 0, explanation: "Set مفيش تكرار." },
    { type: "mcq", question: "var map1={\"a\":1}; var map2={\"a\":2}; var map={...map1,...map2}; print(map[\"a\"]);", options: ["1", "2", "null", "Error"], answer: 1, explanation: "الأخير يفوز." },
    { type: "mcq", question: "var a=true; var list=[if(a) 1, if(!a) 2]; print(list);", options: ["[1]", "[2]", "[1,2]", "[]"], answer: 0, explanation: "a true فـ 1 بس." },
    { type: "mcq", question: "var a=false; var list=[if(a) 1 else 2]; print(list);", options: ["[1]", "[2]", "[]", "Error"], answer: 1, explanation: "else." },
    { type: "mcq", question: "var list=[1,2]; print([...list,3].length);", options: ["2", "3", "4", "Error"], answer: 1, explanation: "3 عناصر." },
    { type: "mcq", question: "var set={1,2,3}; set.remove(2); print(set);", options: ["{1,3}", "{1,2}", "{2,3}", "Error"], answer: 0, explanation: "شال 2." },
    { type: "mcq", question: "var map={\"a\":1}; print(map.containsKey(\"a\"));", options: ["true", "false", "null", "Error"], answer: 0, explanation: "موجود." },
    { type: "mcq", question: "var list=[1,2,3]; print(list.indexOf(2));", options: ["0", "1", "2", "Error"], answer: 1, explanation: "index 1." },
    { type: "mcq", question: "var list=[1,2]; list.insert(1,5); print(list);", options: ["[1,5,2]", "[5,1,2]", "[1,2,5]", "Error"], answer: 0, explanation: "insert at 1." },
    { type: "mcq", question: "var a=true; var list=[1,...[2,3],if(a)4]; print(list);", options: ["[1,2,3,4]", "[1,2,3]", "[4]", "Error"], answer: 0, explanation: "الكل." },
    { type: "mcq", question: "var a=false; var list=[1,...[2,3],if(a)4]; print(list);", options: ["[1,2,3]", "[4]", "[1]", "Error"], answer: 0, explanation: "a false فمفيش 4." },
    { type: "mcq", question: "var list=[...[1,2],...[3,4]]; print(list);", options: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,2]", "Error"], answer: 0, explanation: "spread الاتنين." },
    { type: "mcq", question: "var list=[1,2]; var newList=[...list]; newList.add(5); print(list);", options: ["[1,2]", "[1,2,5]", "[5,1,2]", "Error"], answer: 0, explanation: "list ثابتة." },
    { type: "mcq", question: "var map={\"a\":1}; var newMap={...map}; newMap[\"b\"]=2; print(map);", options: ["{a:1}", "{a:1,b:2}", "{b:2}", "Error"], answer: 0, explanation: "map منفصلة." },
    { type: "mcq", question: "void f({int a=5}){print(a);} f();", options: ["null", "5", "Error", "0"], answer: 1, explanation: "default 5." },
    { type: "mcq", question: "void f({required int a}){print(a);} f();", options: ["null", "0", "Compile error", "Runtime error"], answer: 2, explanation: "required محذوف." },
    { type: "mcq", question: "void f({int? a}){print(a??10);} f(a:null);", options: ["null", "0", "10", "Error"], answer: 2, explanation: "null فـ 10." },
    { type: "mcq", question: "void f({int a=1,int b=2}){print(a+b);} f(b:5);", options: ["3", "6", "5", "Error"], answer: 1, explanation: "1+5=6." },
    { type: "mcq", question: "int sum({int a=2,int b=3})=>a+b; print(sum(a:5));", options: ["5", "8", "3", "Error"], answer: 1, explanation: "5+3=8." },
    { type: "mcq", question: "void f({required int a,int b=2}){print(a+b);} f(a:3);", options: ["3", "5", "Error", "2"], answer: 1, explanation: "3+2=5." },
    { type: "mcq", question: "void f({int? a}){print(a!.isEven);} f(a:2);", options: ["Error", "true", "false", "null"], answer: 1, explanation: "2 زوجي." },
    { type: "mcq", question: "void f({int? a}){print(a?.isEven);} f();", options: ["Error", "null", "false", "true"], answer: 1, explanation: "a null." },
    { type: "mcq", question: "void f({int a=1}){a++; print(a);} f();", options: ["1", "2", "Error", "null"], answer: 1, explanation: "1+1=2." },
    { type: "mcq", question: "int f({int a=2})=>a*a; print(f());", options: ["2", "4", "Error", "0"], answer: 1, explanation: "2*2=4." },
    { type: "mcq", question: "void f({int a=2}){print(a==2);} f(a:2);", options: ["false", "true", "Error", "null"], answer: 1, explanation: "true." },
    { type: "mcq", question: "void f({int a=1}){print(a is int);} f();", options: ["false", "true", "Error", "null"], answer: 1, explanation: "int." },
    { type: "mcq", question: "void f({int? a}){a??=7; print(a);} f();", options: ["null", "7", "Error", "0"], answer: 1, explanation: "null فـ 7." },
    { type: "mcq", question: "int f({int a=2})=>++a; print(f());", options: ["2", "3", "Error", "4"], answer: 1, explanation: "++a قبل." },
    { type: "mcq", question: "int f({int a=2})=>a++; print(f());", options: ["2", "3", "Error", "null"], answer: 0, explanation: "a++ بعد." },
    { type: "mcq", question: "void f({String name=\"Guest\"}){print(name.toUpperCase());} f();", options: ["guest", "GUEST", "Error", "null"], answer: 1, explanation: "GUEST." },
    { type: "mcq", question: "void f({bool flag=false}){if(flag) print(\"A\"); else print(\"B\");} f();", options: ["A", "B", "Error", "null"], answer: 1, explanation: "false فـ B." },
    { type: "mcq", question: "int f({int a=5})=>a~/2; print(f());", options: ["2", "2.5", "3", "Error"], answer: 0, explanation: "5/2=2 integer." },
    { type: "mcq", question: "int f({int? a})=>(a??3)*2; print(f());", options: ["3", "6", "Error", "null"], answer: 1, explanation: "3*2=6." },
    { type: "mcq", question: "void f({List<int> l=const[1,2]}){print(l.length);} f();", options: ["1", "2", "Error", "null"], answer: 1, explanation: "2 عناصر." },
    { type: "mcq", question: "Named parameters order?", options: ["Fixed", "Any order", "Positional only", "Required"], answer: 1, explanation: "أي ترتيب." },
    { type: "mcq", question: "void f({required int a}){} f(a:1);", options: ["Error", "Works", "null", "Runtime error"], answer: 1, explanation: "شغال." },
    { type: "mcq", question: "void f({int a=1}){} f(a:null);", options: ["Works", "Compile error", "Runtime error", "null"], answer: 1, explanation: "int مش null." },
    { type: "mcq", question: "void f({int? a=null}){print(a);} f();", options: ["Error", "null", "0", "1"], answer: 1, explanation: "null." },
    { type: "mcq", question: "void f({int a=1}){print(a);} f(a:0);", options: ["1", "0", "Error", "null"], answer: 1, explanation: "0." },
    { type: "mcq", question: "int f({required int a})=>a*2; print(f(a:3));", options: ["3", "6", "Error", "null"], answer: 1, explanation: "3*2=6." },
    { type: "mcq", question: "int f({int a=1,int b=2})=>a+b; print(f(b:10));", options: ["3", "11", "10", "Error"], answer: 1, explanation: "1+10=11." },
    { type: "mcq", question: "void f({int? a}){print(a??=5);} f(a:1);", options: ["5", "1", "Error", "null"], answer: 1, explanation: "a=1 موجود." },
    { type: "mcq", question: "void f({int? a}){print(a??=5);} f();", options: ["5", "null", "Error", "0"], answer: 0, explanation: "null فـ 5." },
    { type: "mcq", question: "int f({int a=2})=>a.isEven?1:0; print(f());", options: ["1", "0", "Error", "null"], answer: 0, explanation: "2 زوجي." },
    { type: "mcq", question: "int f({int? a})=>a?.isEven==true?1:0; print(f());", options: ["1", "0", "Error", "null"], answer: 1, explanation: "null != true." },
    { type: "mcq", question: "int f({int? a})=>(a??2)+1; print(f(a:3));", options: ["3", "4", "Error", "2"], answer: 1, explanation: "3+1=4." },
    { type: "mcq", question: "int f({int? a})=>(a??2)+1; print(f());", options: ["2", "3", "Error", "null"], answer: 1, explanation: "2+1=3." },
    { type: "mcq", question: "void f({required int a}){print(a);} f(a:0);", options: ["Error", "0", "null", "Runtime error"], answer: 1, explanation: "0." },
    { type: "mcq", question: "int f({int a=2})=>a*2; print(f(a:f()));", options: ["4", "8", "Error", "2"], answer: 1, explanation: "f()=4 ثم 4*2=8." },
    { type: "mcq", question: "void f({int? a}){print(a!.isOdd);} f(a:3);", options: ["Error", "true", "false", "null"], answer: 1, explanation: "3 فردي." },
    { type: "mcq", question: "void f({int? a}){if(a?.isEven??false) print(\"even\"); else print(\"no\");} f();", options: ["even", "no", "Error", "null"], answer: 1, explanation: "null??false." },
    { type: "mcq", question: "int f({int a=1})=>a+=2; print(f());", options: ["1", "3", "Error", "2"], answer: 1, explanation: "1+2=3." },
    { type: "mcq", question: "void f({int a=1}){print(a.runtimeType);} f();", options: ["int", "double", "dynamic", "Error"], answer: 0, explanation: "int." },
    { type: "mcq", question: "int f({int? a})=>(a??1)*(a??1); print(f());", options: ["1", "2", "Error", "null"], answer: 0, explanation: "1*1=1." },

    // Native/Cross-platform
    { type: "mcq", question: "Native applications are built using:", options: ["One codebase", "Platform-specific languages/tools", "Web only", "Dart only"], answer: 1, explanation: "لكل منصة كود." },
    { type: "mcq", question: "Example native Android language:", options: ["Dart", "Kotlin", "JavaScript", "Python"], answer: 1, explanation: "Kotlin." },
    { type: "mcq", question: "Example native iOS language:", options: ["Swift", "Dart", "C#", "Java"], answer: 0, explanation: "Swift." },
    { type: "mcq", question: "Cross-platform means:", options: ["Separate code", "One codebase multiple platforms", "Mobile only", "Web only"], answer: 1, explanation: "كود واحد." },
    { type: "mcq", question: "Flutter is:", options: ["Native", "Cross-platform framework", "Database", "OS"], answer: 1, explanation: "Cross-platform." },
    { type: "mcq", question: "Main advantage of native:", options: ["Faster development", "Maximum performance", "Single code", "Lower cost"], answer: 1, explanation: "أداء أقصى." },
    { type: "mcq", question: "Main advantage of cross-platform:", options: ["Higher hardware", "Single codebase saves time", "Platform-specific UI", "Always faster"], answer: 1, explanation: "كود واحد." },
    { type: "mcq", question: "Native provides:", options: ["Worse performance", "Better device integration", "Less UI control", "No offline"], answer: 1, explanation: "تكامل أحسن." },
    { type: "mcq", question: "Cross-platform limitation:", options: ["Performance vs native", "Code reuse", "Development speed", "UI consistency"], answer: 0, explanation: "أداء أقل قليلاً." },
    { type: "mcq", question: "Example cross-platform frameworks:", options: ["Flutter, React Native, Xamarin", "Swift only", "Kotlin only", "Android Studio"], answer: 0, explanation: "Flutter وغيرها." },
    { type: "mcq", question: "Flutter language:", options: ["Java", "Dart", "Kotlin", "Swift"], answer: 1, explanation: "Dart." },
    { type: "mcq", question: "Native development cost is:", options: ["Lower", "Same", "Higher", "Free"], answer: 2, explanation: "أعلى." },
    { type: "mcq", question: "Cross-platform best for:", options: ["Startup MVP", "Hardware-intensive games", "OS-level", "Drivers"], answer: 0, explanation: "MVPs و Startups." },
    { type: "mcq", question: "Native UI components are:", options: ["Emulated", "Real platform components", "WebView", "Not customizable"], answer: 1, explanation: "حقيقية." },
    { type: "mcq", question: "Flutter UI is:", options: ["Native widgets", "Drawn by own rendering engine", "HTML", "XML"], answer: 1, explanation: "Flutter بيرسم." },
    { type: "mcq", question: "Cross-platform improves:", options: ["Duplication", "Development speed", "Fragmentation", "Latency"], answer: 1, explanation: "سرعة التطوير." },
    { type: "mcq", question: "Native apps best when:", options: ["Performance-critical", "Simple prototypes", "Learning", "MVP only"], answer: 0, explanation: "الأداء أهم." },
    { type: "mcq", question: "Cross-platform disadvantage:", options: ["Code reuse", "Platform-specific workarounds needed", "Faster updates", "Single team"], answer: 1, explanation: "ممكن تحتاج حلول خاصة." },
    { type: "mcq", question: "Cross-platform biggest benefit:", options: ["Best performance", "One team builds for many", "OS kernel access", "No plugins"], answer: 1, explanation: "فريق واحد." },
  ],
};

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==================== DUAA PAGE ====================
function createFloatingHearts() {
  const container = document.getElementById("duaaHearts");
  const hearts = ["💚", "🤲", "🕊️", "✨", "💜", "🌟", "❤️"];
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 8 + "s";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
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
  if (!name) { document.getElementById("nameError").style.display = "block"; valid = false; }
  else document.getElementById("nameError").style.display = "none";
  if (!id) { document.getElementById("idError").style.display = "block"; valid = false; }
  else document.getElementById("idError").style.display = "none";
  if (!dept) { document.getElementById("deptError").style.display = "block"; valid = false; }
  else document.getElementById("deptError").style.display = "none";
  if (!valid) return;
  currentUser = { name, id, dept };
  document.getElementById("welcomeName").textContent = name;
  document.getElementById("welcomeId").textContent = id;
  document.getElementById("welcomeDept").textContent = dept.charAt(0).toUpperCase() + dept.slice(1);
  loadSubjects();
  showPage("subjectsPage");
}

// ==================== SUBJECTS ====================
function loadSubjects() {
  const grid = document.getElementById("subjectsGrid");
  grid.innerHTML = "";
  const subjects = subjectsData[currentUser.dept];
  subjects.forEach(sub => {
    const hasQ = sub.hasQuestions && questionsDB[sub.id];
    const card = document.createElement("div");
    card.className = `subject-card ${hasQ ? "" : "coming-soon"}`;
    if (hasQ) card.onclick = () => startExam(sub.id, sub.name);
    const imgUrl = subjectImages[sub.id] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop";
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
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleMCQOptions(question) {
  if (question.type !== "mcq") return question;
  const items = question.options.map((opt, index) => ({ text: opt, isCorrect: index === question.answer }));
  shuffleArray(items);
  question.options = items.map(item => item.text);
  question.answer = items.findIndex(item => item.isCorrect);
  return question;
}

function startExam(subjectId, subjectName) {
  currentSubject = subjectName;
  currentSubjectId = subjectId;
  currentQuestions = questionsDB[subjectId].map(q => {
    const copied = { ...q, options: [...q.options] };
    if (copied.type === "mcq") shuffleMCQOptions(copied);
    return copied;
  });
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
  document.getElementById("examProgressText").textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  const card = document.getElementById("questionCard");
  const letters = ["A", "B", "C", "D"];
  const badgeClass = q.type === "mcq" ? "badge-mcq" : "badge-tf";
  const badgeText = q.type === "mcq" ? "📝 Multiple Choice" : "✅ True / False";
  let optionsHTML = "";
  q.options.forEach((opt, idx) => {
    const selectedClass = userAnswers[currentQuestionIndex] === idx ? "selected" : "";
    const letter = q.type === "mcq" ? letters[idx] : (idx === 0 ? "T" : "F");
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
  document.getElementById("finishBtn").style.display = currentQuestionIndex === total - 1 ? "flex" : "none";
}

function selectAnswer(idx) {
  userAnswers[currentQuestionIndex] = idx;
  document.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
  document.querySelectorAll(".option-item")[idx].classList.add("selected");
  if (currentQuestionIndex < currentQuestions.length - 1) {
    setTimeout(() => { currentQuestionIndex++; renderQuestion(); }, 400);
  } else {
    const fb = document.getElementById("finishBtn");
    fb.style.display = "flex";
    fb.style.animation = "pulse 1s infinite";
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); }
}

function goBackToSubjects() {
  if (confirm("Are you sure? Your progress will be lost.")) showPage("subjectsPage");
}

function finishExam() {
  const unanswered = userAnswers.filter(a => a === -1).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  calculateResult();
}

// ==================== RESULTS - NEW DESIGN ====================
function calculateResult() {
  let correct = 0, wrong = 0, unanswered = 0;
  const reviewQuestions = [];
  currentQuestions.forEach((q, idx) => {
    const ua = userAnswers[idx];
    if (ua === -1) {
      unanswered++;
      reviewQuestions.push({ index: idx, question: q.question, userAnswerText: "⏭️ لم يتم الإجابة", correctAnswerText: q.options[q.answer], explanation: q.explanation || "", type: q.type, status: "skipped" });
    } else if (ua === q.answer) {
      correct++;
    } else {
      wrong++;
      reviewQuestions.push({ index: idx, question: q.question, userAnswerText: q.options[ua], correctAnswerText: q.options[q.answer], explanation: q.explanation || "", type: q.type, status: "wrong" });
    }
  });

  const total = currentQuestions.length;
  const percentage = Math.round((correct / total) * 100);
  let grade, gradeClass, trophy, statusText, message;

  if (percentage >= 85) {
    grade = "ممتاز"; gradeClass = "grade-excellent"; trophy = "🏆"; statusText = "EXCELLENT WORK";
    message = "ما شاء الله عليك! أداء ممتاز جداً 🌟<br>إنت فخر لأهلك، كمّل على كده وربنا يوفقك دايماً يا هندسة! 💪✨";
  } else if (percentage >= 75) {
    grade = "جيد جداً"; gradeClass = "grade-very-good"; trophy = "🎉"; statusText = "VERY GOOD";
    message = "برافو عليك! 🎉<br>أداء جميل جداً، شوية مذاكرة كمان وهتوصل للامتياز إن شاء الله. ربنا يوفقك! 🙌";
  } else if (percentage >= 60) {
    grade = "جيد"; gradeClass = "grade-good"; trophy = "😊"; statusText = "GOOD JOB";
    message = "كويس أوي! 👍<br>بس تقدر تعمل أحسن من كده بكتير. راجع الي غلطت فيه وحاول تاني. إنت قدها! 💪";
  } else if (percentage >= 50) {
    grade = "مقبول"; gradeClass = "grade-pass"; trophy = "😐"; statusText = "YOU PASSED";
    message = "عدّيت بس محتاج تشد حيلك أكتر 📚<br>راجع كويس وذاكر تاني. التعب دلوقتي هيفرق معاك بعدين!";
  } else {
    grade = "حاول مرة أخرى"; gradeClass = "grade-fail"; trophy = "💪"; statusText = "TRY AGAIN";
    message = "متقلقش! كلنا بنتعلم من أخطائنا 🔥<br>راجع المادة كويس وحاول تاني. إنت أقوى من كده وأنا واثق فيك!";
  }

  // Build review HTML
  let reviewHTML = "";
  if (reviewQuestions.length === 0) {
    reviewHTML = `
            <div class="review-perfect">
                <div class="review-perfect-icon">🎉🏆🎉</div>
                <div class="review-perfect-title">ما شاء الله! كل الإجابات صحيحة!</div>
                <div class="review-perfect-sub">أداء مثالي يا بطل! 💪</div>
            </div>
        `;
  } else {
    reviewHTML = `
            <div class="review-header-info">
                <div class="review-header-title">📋 مراجعة الإجابات الخاطئة والمتروكة</div>
                <div class="review-header-sub">راجع كل سؤال وافهم الإجابة الصحيحة 💡</div>
            </div>
            <div class="review-list">
        `;
    reviewQuestions.forEach(rq => {
      const statusIcon = rq.status === "wrong" ? "❌" : "⏭️";
      const statusClass = rq.status === "wrong" ? "review-wrong" : "review-skipped";
      const statusText = rq.status === "wrong" ? "إجابة خاطئة" : "لم يتم الإجابة";
      const typeBadge = rq.type === "mcq" ? "MCQ" : "T/F";
      reviewHTML += `
                <div class="review-item ${statusClass}">
                    <div class="review-item-header">
                        <div class="review-qnum">${statusIcon} سؤال ${rq.index + 1}</div>
                        <div class="review-status-badge ${statusClass}-badge">${statusText}</div>
                        <div class="review-type-badge">${typeBadge}</div>
                    </div>
                    <div class="review-question">${rq.question}</div>
                    <div class="review-answers">
                        ${rq.status === "wrong" ? `
                        <div class="review-your">
                            <span class="review-label">❌ إجابتك:</span>
                            <span class="review-answer-wrong">${rq.userAnswerText}</span>
                        </div>` : ""}
                        <div class="review-correct">
                            <span class="review-label">✅ الإجابة الصحيحة:</span>
                            <span class="review-answer-correct">${rq.correctAnswerText}</span>
                        </div>
                    </div>
                    ${rq.explanation ? `
                    <div class="review-explanation">
                        <div class="review-explanation-header">💡 الشرح:</div>
                        <div class="review-explanation-text">${rq.explanation}</div>
                    </div>` : ""}
                </div>
            `;
    });
    reviewHTML += `</div>`;
  }

  // Calculate circle offset
  const circumference = 565.48;
  const offset = circumference - (percentage / 100) * circumference;

  document.getElementById("resultContainer").innerHTML = `
        <!-- HERO CARD -->
        <div class="result-hero">
            <div class="result-trophy">${trophy}</div>
            <div class="result-status-text">${statusText}</div>
            <div class="result-grade-badge ${gradeClass}">${grade}</div>
            
            <div class="circular-progress-container">
                <div class="circular-progress">
                    <svg viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#6C63FF"/>
                                <stop offset="100%" stop-color="#A855F7"/>
                            </linearGradient>
                        </defs>
                        <circle class="circular-bg" cx="100" cy="100" r="90"/>
                        <circle class="circular-fill" cx="100" cy="100" r="90" style="--final-offset: ${offset};"/>
                    </svg>
                    <div class="circular-text">
                        <div class="circular-percent">${percentage}%</div>
                        <div class="circular-label">Your Score</div>
                    </div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card stat-correct">
                    <div class="stat-icon">✅</div>
                    <div class="stat-value">${correct}</div>
                    <div class="stat-label">Correct</div>
                </div>
                <div class="stat-card stat-wrong">
                    <div class="stat-icon">❌</div>
                    <div class="stat-value">${wrong}</div>
                    <div class="stat-label">Wrong</div>
                </div>
                <div class="stat-card stat-skip">
                    <div class="stat-icon">⏭️</div>
                    <div class="stat-value">${unanswered}</div>
                    <div class="stat-label">Skipped</div>
                </div>
                <div class="stat-card stat-total">
                    <div class="stat-icon">📊</div>
                    <div class="stat-value">${total}</div>
                    <div class="stat-label">Total</div>
                </div>
            </div>
        </div>

        <!-- USER INFO CARD -->
        <div class="result-info-card">
            <div class="info-card-title">
                <span class="info-card-title-icon">👤</span>
                <span>Student Information</span>
            </div>
            <div class="info-grid">
                <div class="info-box">
                    <div class="info-box-label">Full Name</div>
                    <div class="info-box-value">${currentUser.name}</div>
                </div>
                <div class="info-box">
                    <div class="info-box-label">Student ID</div>
                    <div class="info-box-value">${currentUser.id}</div>
                </div>
                <div class="info-box">
                    <div class="info-box-label">Department</div>
                    <div class="info-box-value">${currentUser.dept.charAt(0).toUpperCase() + currentUser.dept.slice(1)}</div>
                </div>
                <div class="info-box">
                    <div class="info-box-label">Subject</div>
                    <div class="info-box-value">${currentSubject}</div>
                </div>
            </div>
        </div>

        <!-- MESSAGE CARD -->
        <div class="result-message-box">
            <span class="message-icon">💌</span>
            <div class="result-message">${message}</div>
        </div>

        <!-- ACTIONS -->
        <div class="result-actions">
            <button class="result-btn result-btn-primary" onclick="retryExam()">🔄 Try Again</button>
            <button class="result-btn result-btn-secondary" onclick="showPage('subjectsPage')">📚 Other Subjects</button>
            ${reviewQuestions.length > 0 ? `<button class="result-btn result-btn-review" id="reviewToggleBtn" onclick="toggleReview()">🔎 مراجعة الأخطاء (${reviewQuestions.length})</button>` : ""}
        </div>

        <!-- REVIEW -->
        <div id="resultReviewContainer" class="result-review" style="display:none;">
            ${reviewHTML}
        </div>
    `;

  showPage("resultPage");
  if (percentage >= 85) { launchBalloons(); launchConfetti(); }
}

function toggleReview() {
  const c = document.getElementById("resultReviewContainer");
  const btn = document.getElementById("reviewToggleBtn");
  if (!c || !btn) return;
  if (c.style.display === "none") {
    c.style.display = "block";
    btn.innerHTML = "❌ إخفاء المراجعة";
    btn.classList.add("review-active");
    setTimeout(() => c.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  } else {
    c.style.display = "none";
    const count = document.querySelectorAll(".review-item").length;
    btn.innerHTML = `🔎 مراجعة الأخطاء (${count})`;
    btn.classList.remove("review-active");
  }
}

function retryExam() {
  startExam(currentSubjectId, currentSubject);
}

// ==================== CELEBRATIONS ====================
function launchBalloons() {
  const container = document.getElementById("balloonsContainer");
  container.innerHTML = "";
  const colors = ["#FF6B6B", "#6C63FF", "#00C9A7", "#FFD93D", "#FF8A5C", "#A855F7", "#EC4899", "#4facfe", "#43e97b", "#f093fb"];
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const b = document.createElement("div");
      b.className = "balloon";
      b.style.left = Math.random() * 100 + "%";
      b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      b.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
      b.style.setProperty("--rotate", (Math.random() * 360) + "deg");
      b.style.animationDuration = (3 + Math.random() * 3) + "s";
      b.style.width = (40 + Math.random() * 25) + "px";
      b.style.height = (50 + Math.random() * 30) + "px";
      container.appendChild(b);
      setTimeout(() => b.remove(), 7000);
    }, i * 150);
  }
}

function launchConfetti() {
  const colors = ["#FF6B6B", "#6C63FF", "#00C9A7", "#FFD93D", "#FF8A5C", "#A855F7", "#EC4899", "#4facfe"];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "%";
      c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      c.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
      c.style.width = (5 + Math.random() * 10) + "px";
      c.style.height = (5 + Math.random() * 10) + "px";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      c.style.animationDuration = (2 + Math.random() * 2) + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }, i * 50);
  }
}

// ==================== UTILITIES ====================
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
