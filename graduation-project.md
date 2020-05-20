---
title: Graduation Project
documentId: 1tvOt7nL3ih5_oxujZoyHA8bENMyyfC2gOnxCRjKNrYc
revisionId: ALm37BUH6AZiNLQZkhu6MQidFJkXUUpfJecqgJSnNItu6t9pcczdUEJfFyMFnqBXON-gUQknK7cDEUNOfcGlBEo
---

#  

# EIVA

# Email-based Intelligent Virtual AssistantFor Scheduling Appointments

Creative Technology BScGraduation Project

Anand ChowdharyS1930702

## Contents

## Acknowledgements

- Mohit and Florian for initial hackathon
- AWS credits

## Introduction

Setting up appointments by email is a non-trivial waste of time. Last year, 110 billion consumer emails were sent per day, with a very common use case being setting up appointments [1]. Several email exchanges are required in order to find a suitable time and place where all parties are available, and almost 1 in 5 users struggle with finding sufficient available time slots [2]. This back-and-forth calendar conflict resolution wastes on average 17 minutes per meeting [3]. Moreover, over 3 in 5 meetings end up getting rescheduled for a different time or place [4], which wastes additional time in confirmations. This adds up to about 9 hours wasted every month per person.

For some professionals, scheduling these meetings manually can feel like a “frustrating distraction from the things that matter,” so much so that they hire assistants to help with the task [8]. However, not everyone can afford full-time assistants and will therefore turn to software solutions. Email-based intelligent virtual assistants (EIVA, /iːvɑ/) built using machine learning can help by automating these scheduling messages. An EIVA can access a user’s calendar and find empty meeting slots based on their location and scheduling preferences. It can then send and respond to emails regarding scheduling meetings on the user’s behalf.

The goal of this paper is to design and develop an EIVA, and in turn give insight into the following research questions:

1. How do professionals currently schedule appointments over email, with or without scheduling software? If they don’t use scheduling software, why is that the case?
1. What are the tasks required in scheduling a meeting in an automated software?

Lastly, a significant part of this paper will focus on the methodology and results of a user experience research on the web interface of the assistant service, conducted over several weeks. The EIVA software and APIs will be developed using Node.js and TypeScript, and the progressive web application will be developed using a modern Vue.js + Nuxt.js technology stack.

## State of the Art

### How professionals schedule appointments

In their fundamental forms, calendars are the “most basic of all human sensemaking devices” [9]. From time immemorial, calendars have been used as tools to establish patterns through which nearly all institutions, societies, and social groups manage orderliness. Notably, the first “book” printed by Gutenberg in 1452 was a calendar [10], and today, professionals increasingly use digital calendars for the same purpose of time management and accountability. Digital calendars have become “the standard office tool for coordinating and synchronizing work activities” [9].

There are several calendaring software products available to professionals, both commercial and open source. In general, they offer a range of features, including calendar views, built-in address book, appointment reminders, and email integration [11]. Many major internet companies offer such solutions, such as Google Calendar, Microsoft Outlook, Apple Calendar, and Mozilla Thunderbird. For company-wide adoption, enterprise software such as Microsoft Exchange and IBM Notes are also available [12]. University of Twente, for example, recommends the use of Google Calendar [13].

However, company-wide adoption of scheduling software is troublesome. For end users, it requires behavioral change, such as using a different tool than they are used to [14]. Additionally, there is no “one size fits all” solution to calendaring, because there is a wide variation in people’s meeting needs. For example, a professor who wants to schedule office hours with students might want students to pick their preferred meeting times, whereas a corporate executive might want to heavily control their availability times and response to meeting requests.

Professionals who can afford to hire assistants choose to delegate the hassle of scheduling. In a survey of administrative assistants, all but one reported that most of their work was scheduling-related, wasting hundreds of man-hours [15].

### Shortfalls of currently available scheduling tools

Currently available products force the end user to manually enact the process of scheduling [16]. For this reason, these tools avoid the need to actively reason about constraints and the user’s scheduling preferences, such as which one of the many available meeting times to choose when underconstrained, and how the user would prefer to relax a meeting request when overconstrained [17]. In a work environment, there are further decisions to make, such as which conference room is best for a given type of meeting, or setting up remote meetings using video calling software. All of these decisions are presently passed onto the end user.

These calendaring tools are also “particularly cumbersome when attendees need to coordinate multiple schedules while each using their own individual tool and approach” [8]. This is especially true for users who have multiple calendars, such as a different calendar for work and personal lives. A survey of 23 professionals found that substantially more than half of the respondents maintain more than one calendar, with some respondents using as high as six calendars at once [18]. Another survey reported that 2 calendars were used by professionals on average [6]. Keeping separate work and private calendars is the norm “even though the standard weekly interface of most scheduling software is meant to occlude such distinctions” [9]. This suggests that an important feature of the ideal scheduling software would be the ability to synchronize and find availability from multiple calendars.

Apart from calendaring tools, some users opt for scheduling tools that have additional features available, though they too possess shortcomings. For example, Google Calendar’s “Find a time” feature helps users select a time by displaying the availability of all participants graphically [19]. This is particularly helpful when integrated on an institutional level, with features such as room booking and team invitations, but it also introduces new challenges for participants who do not add their agenda to their calendar well in advance. A 1982 survey found enormous differences in the time span coverage between respondents, with some users planning appointments months in advance while others concerned only with the current day and the day following [18]. Hence, scheduling software must be conversational and confirm the proposed time with guests without directly relying upon their calendar.

Although digital calendars have been the standard office tool for professionals, they are currently unable to bridge the communication gap between the end user and the invitees. Current scheduling products also lack a holistic solution to calendaring due to a wide variation in people’s meeting needs. Thus, end users have to rely upon emailing to communicate meeting details effectively, wasting otherwise productive man-hours.

### Currently available scheduling tools

The previous section highlights that although there is a multitude of scheduling softwares available, they are not EIVAs and therefore lack the potential benefit that personalized AI technology could bring. Today, there are early products available in the market that have some features of an EIVA, like automatically responding to emails and recommending meeting times based on multiple calendars.

Microsoft’s Cortana, though primarily a speech-based assistant targeted towards consumers, has calendaring and scheduling features as well. Cortana has built-in Office 365 capabilities, Microsoft’s enterprise solution that includes integrated email accounts with calendars. Apart from being available on mobile devices, Cortana is also built into Windows 10, which has over 400 million users. Similarly, Amazon’s Alexa and Apple’s Siri also have scheduling features.

The leader in the AI-powered scheduling assistant industry is x.ai, a New York-based startup founded in 2014 that has raised over $40 million in venture capital. Using the service, customers can select between Amy and Andrew, a female and male virtual assistant respectively. A major competitor to x.ai is Clara by Clara Labs, a similar virtual assistant for scheduling over email. Clara can also send email reminders to confirm attendance and find available conference rooms in an office.

In the Netherlands, a popular service called Datumprikker allows users to send meeting invitations, allowing guests to select their preferred times. Calendly, an Atlanta-based startup, currently leads this category, although their product is focused on one-on-one meetings as opposed to Datumprikker’s preference for multiple guests.

There are also highly specialized solutions available. For example, in the travel space, Mezi uses a chatbot interface to ask the user questions, and can book their flights and hotels automatically and add them to the user’s calendar. In the high-tech space, Google’s Duplex uses advanced neural text-to-speech and speech recognition to place real phone calls to businesses to schedule appointments.

### Author’s previous work

EIVA is the evolution of a project the author envisioned several years ago along with the client. In October 2017, the client (Speakup BV) organized a hackathon in Enschede, and the author participated with a colleague to build a concept of a disruptive communication technology. During the 24-hour period, we built “Ara”, a scheduling chatbot app which could message people from your team on your behalf to schedule meetings. We won two awards worth €500 each. Although Ara was only a prototype of an app-based assistant, it started a relationship with Florian Overkamp, the founder and chief entrepreneur of Speakup, and we decided to take the idea forward.

During the coming summer, I worked closely with Speakup on materializing Ara. For a period of two months, I expanded on the idea of scheduling assistants and decided to focus on email as the primary form factor. At the end of the project, I had a functional prototype of an assistant that could send appointment confirmation emails and used “Wizard of Oz AI” to understand natural language, primarily based on a few “if” conditions.

For a few months, I used Ara myself to test the assistant. In fact, in a 2017 interview titled “UT student among the top 50 young entrepreneurs” with UToday, University of Twente’s independent publication, Jelle Posthuma stated the following:

_It was easy to schedule an interview with the first-year student of Creative Technology. His “personal assistant” Ara sent a friendly email replying: “You’ll be welcome to come next Wednesday.” Chowdhary is a co-owner of the company Oswald Labs, which develops products for people with disabilities. His office is in Roombeek. “Anand, you’re working hard: you even have a personal assistant…” A big grin appears on the young student’s face. “Yes, I built her myself. Ara is a computer. Her AI recognizes emails and schedules my appointments.”
_

Although Ara didn’t have any AI at this point, it was a successful proof-of-concept. The following summer, I worked again with Speakup, but primarily on building on top of an open-source SaaS framework that I had built over a few months (Staart API and Staart UI). This is the underlying framework that EIVA is built on top of. The budget also allowed me to spend some more time on exploring what a service-orientated implementation of Ara could look like.

During this Graduation Project, I decided to continue working with Speakup, and EIVA is a direct successor to Ara. However, the thesis presented the opportunity to take a research-driven approach, and no earlier code was reused, resulting in a new product built from the ground up with more sophisticated languages and frameworks.

**Table 1: A comparison of Ara and EIVA
**

## Methods and Techniques

...

### Modern web applications

_This section will talk about the methods and techniques of modern webapps, using different stacks, deploying PWAs, etc.
_

## Ideation

_This section will show the ideation stage of development, including many cycles of prototypes and mockups for the app UI, the system architecture, etc.
_

## Specification

_This section will discuss the specifics on how the EIVA will be built_

### Tasks required in scheduling by an EIVA

Since the majority of currently available scheduling tools are not assistant-based, most users prefer to use email for scheduling rather than currently available specialized software. A survey of workers in the field of information management found that over 80% of the respondents use email for scheduling and organization [20].

The process of scheduling online appointments is non-trivial and requires several rounds of communication, coordination, and negotiation.

#### Understanding natural language over email

Communication with devices using natural language is commonplace for many people today, especially with the advent of affordable smart voice assistants, such as Alexa, available on Amazon Echo; and Google Assistant, available on Google Home [21]. Their interface, which translates a human’s intention into a device’s control commands using speech recognition and natural language interpretation, is known as a Natural Language Interface (NLI). The dialogue-style nature of the interactions between the user and the device and their ability to preserve context across different queries are benefits of using NLIs over other user interfaces [22].

Personification of the scheduling process using natural language has the additional benefit of increased likeliness of error forgiveness by end users. In a study, over 80% of the participants who encountered errors in NLIs understanding them said that either their attitude was unaffected or the users themselves “must have typed in something wrong” [23]. Furthermore, NLIs allow people to use their existing calendaring tools and idiosyncrasies by adopting email as the user interface and natural language conversations as the interaction mode. For example, a message such as “Please schedule an appointment with Florian for next week” should be enough for the EIVA to take over the remainder of the process.

#### Parameter recommendations

Recommendation systems are frequently used in several industries to help users make better decisions. Examples of collaborative recommender systems include product recommendations on e-commerce website Amazon [24] and TV series recommendations on the streaming provider Netflix [25]. Modern systems may use various machine learning techniques like artificial neural networks combined with feature extraction methods to find the ideal recommendation [26].

Scheduling a single appointment requires agreement on several parameters, such as date, time, duration, and location of meeting. Recommending a set of these parameters must be based on the user’s predetermined preferences, such as the hours they prefer for scheduling calls. However, the ideal implementation of such a recommendation system may take a multidimensional approach that uses additional contextual information [27]. For example, contextual information may include the user’s location to account for the travel time to a recommended meeting’s location; or, for international calls, it may include the guest’s timezone based on their IP address.

#### Negotiation

Since not all guests may be available at the initially proposed time, the next major task required by the EIVA is negotiation. The negotiation mechanism allows it to be flexible about constraints imposed by the preferences of other users. Zunino and Campo (2009) note that the negotiation mechanism “starts when two [users] do not agree on some parameter of a meeting,” such as the date, time, or location of the meeting [28]. Then, the guest may propose a new set of parameters for the meeting, for example by modifying its time. The EIVA will evaluate whether the proposal is convenient or not by comparing the “likeliness of reaching a consensus using the previous meeting parameters with the proposed parameters.” In this step, it can also make a judgement call by choosing to ignore part of the user’s preferred parameters in order to agree with the guests. This back-and-forth negotiation process needs to occur asynchronously, “sometimes requiring several days for the parties to reach consensus” [8].

#### Renegotiation and confirmation invitations

In the dynamic environment that is the modern workplace, changing appointment parameters is commonplace. A study found that 66% of all scheduled meetings by a CEO underwent a parameter change [4]. Inevitably, once a meeting is scheduled, it requires “continuous maintenance, as new events often prompt meeting updates and reschedules” [8]. To finalize the meeting parameters, the EIVA should take into account the parameter preferences of both the user and all guests.

To make sure that all guests have the most recent parameters, confirmations and reminders may be sent by the EIVA. However, not all users use the same calendaring software, with some professionals using no digital calendar at all. Kincaid (1985) reported that approximately one half of all meetings scheduled by professionals were with users using a different calendaring system than their own [6]. Therefore, the EIVA will be required to send these emails using industry standards supported by most software. The primary standard to store and exchange calendaring and scheduling information is the Internet Calendaring and Scheduling Core Object Specification (iCalendar) [29].

### Architectural specification

Why Node.js, why Vue.js, AWS stack details, insert a flowchart with how the server and different parts in the stack work together, i.e., systems architecture flowchart

## Realization

### Product development

#### Development cycles

A simplified version of the Software Development Cycle and the New Product Development Cycle were adopted for this project, with the following steps:

1. Idea
1. Research
1. Development
1. External testing
1. Analysis

The first step (Idea) builds on top of the ideation phase with methodological exploration of the idea and specifying the required feature as a module. In the second step (Research), the technical literature research present in “State of the Art” is studied to architect the module’s technology. In the third step (Development), the idea is materialized by writing code and testing the module by writing unit tests and conducting end-to-end tests with the platform. In the fourth step (External testing), a test is conducted with the client or research participants. In the last step (Analysis), the feedback from the test is evaluated for the next cycle.

##### Cycle 1

The first cycle was internal with both the initial development and several refactors. This was the only cycle that did not undergo an external test.

###### Project architecture

...file structure...controller injection...npm server scripts…third-party services like S3 and google...etc.

###### Feature availability

####### Assistant email address

One of the specification conditions was to ensure unique email addresses for each organization using the assistant service, because teams may have similar names of assistants. For example, the default name of the assistant, “Ara Isaacson”, may generate the email address “ara@araassistant.com”, which does not share any information about who the assistant works for. Since unique email addresses for each team is mandatory, the team’s slug was incorporated in the address, i.e., “username@araassistant.com”, for example “florian@araassistant.com”. This has two advantages: firstly, it tells the guests receiving emails from the assistant who the true host is; and secondly, the email receiving architecture can relate the unique email address to the owner’s details.

However, in the first cycle itself, the assistant’s default email was changed from “username@domain” to “meet-username@domain” where “username” is the organization slug and the domain is the assistant’s service domain. This was done to prevent confusion based on the email address; for example, “florian@araassistant.com” may be mistaken as the email address of Florian himself (the user), whereas “meet-florian@araassistant.com” implies that the email address is of the assistant, using which you can schedule an appointment with Florian.

##### Cycle 2

Cycle 2 was the first cycle with direct feedback from the external client, apart from the initial specification and early ideation. The client and the researcher had a 30-minute video call with screen sharing.

###### Feature availability

- Natural language classification for email intent - 90%
- Entity extraction for people, locations, dates, etc. - awareness
- Slot recommendation - ics
- Guest information enrichment - optional
- Email read receipts tracking API - optional (sensible defaults)

###### Client feedback

- NLP in multiple languages rather than translation, let’s start with Dutch and English, with a “fallback” with translation: “I find that hard to be very black and white on. Eventually, you want to have very wide language support. The main question is ‘How much do we think will be involved?’ because if we bring this to market, what’s the initial market we want to focus on?” … “”

#### Open source development

Although the preceding project Ara was licensed under the open source permissive MIT license, EIVA’s source code is made available under the Server Side Public License. This license makes sure that any further implementations or paid services built around EIVA also have their source code made public, and helps the future business use case of EIVA.

However, several open source projects were built in order to support key EIVA features, which were all licensed under the MIT license. This encourages wide community adoption and contributes back to the open source ecosystem, as MIT is the most popular open source license and allows commercial usage of open source projects.

For example, the open source project “calendar-link” was built in order to generate event links to popular calendar services like Google Calendar, Microsoft Outlook, and Yahoo! Calendar. This project is now used by many others, receiving over 1,000 downloads every week and contributed to by 5 additional developers. Developers can use the package to programmatically generate that users can click on to add a specific event to their calendar, with an easy-to-use API:

const { google, outlook } = require("calendar-link");const event = {  title: "My birthday party", // Title of the event  description: "Be there!", // Event description  start: "2019-12-29 18:00:00 +0100", // JavaScript-recognizable date  duration: [3, "hour"] // Event duration};google(event); // https://calendar.google.com/calendar/render...outlook(event); // https://outlook.live.com/owa/...

Similarly, another project “calendar-slots” was released to help find available slots in a user’s calendar. This package can save development times when recommending appointment slots by listing a user’s calendars, fetching all events in a given timeframe, removing slots with conflicts with scheduled events, and recommending a fixed number of slots to the end user:

const { getSlots } = require("calendar-slots");import moment from "moment"; // Import JavaScript date library momentconst now = moment();const tomorrow = moment().add(1).day().endOf("day");const slots = await getSlots({  slotDuration: 30, // Find 30 minute slots  slots: 3, // Recommend 3 slots  from: now, // Starting now  to: tomorrow, // Until tomorrow});

It is also highly configurable, with support for settings such as timezone preference, daily scheduling hours, and custom filter options:

const slots = await getSlots({  slotDuration: 30, // Find 30 minute slots  slots: 3, // Recommend 3 slots  from: now, // Starting now  to: tomorrow, // Until tomorrow,  days: [1, 2, 3, 4, 5], // Monday to Friday  daily: {    timezone: "Europe/Amsterdam", // CET time    from: [9], // Start at 9:00 am    to: [17, 30], // End before 5:30 pm  },});

Both projects are written in TypeScript and available on the Git hosting service GitHub and JavaScript package registry NPM.

**Figure 1: A screenshot of the “calendar-events” source code**

### User research

_This section will discuss the methodology of the UX research
_

## Evaluation

_This section will discuss the results of UX research, what features people like, their privacy preferences, ease of use, analytics from the app, etc.
_

## Conclusion

## Future Work

_This section will discuss the business use case and how Speakup can hypothetically launch the product to their clients in the future_

In the literature research for this paper, it is highlighted that professionals currently either schedule appointments themselves or hire assistants to help with the task. However, regardless of whether the professional or their assistant schedules appointments, the time wasted is not insignificant. According to the European Commission, the average Dutch small or medium-sized enterprise (SME) employs 3.2 people [5]. If each employee attends 7 meetings per week (which is the average for professionals), 26 otherwise productive hours are wasted every month in scheduling meetings [6]. This costs the company over €450 in lost time, based on the average wage of €17.6 per hour [7]. This adds up to almost €2.25 billion per year for the SME industry as a whole, and the numbers are even higher for larger enterprises. University of Twente, for example, employs 3,150 professionals, adding up to over €400,000 in lost time per year.

Therefore, a strong business case can be built around launching EIVA as a service. Since the assistant can save around €150 in lost time per month for professionals, a service that costs as high as €100 per month per person has a return on investment (ROI) of 50%. In my personal opinion, a pricing point of less than €50 per month can be achieved because of the low cloud infrastructure costs. The proposed pricing plans are:

1. Basic plan for €10 per month, targeted towards students, self-employed young professionals, and early-stage entrepreneurs with no support for custom domain, but including unlimited scheduling and assistant usage
1. Pro plan for €25 per month with support for custom domain
1. Team plan for €30 per user per month, targeted towards businesses or institutions who want to onboard their entire team to EIVA for a collaborative experience
1. Custom plan with custom billing for large enterprises with features like dedicated support, on-premise hosting, and uptime service-level agreements (SLA)

## Appendices

### Appendix 1: About the Author

### Appendix 2: Reflection

### Appendix 3: Academic Writing

### Appendix 4: Open source licenses

List of dependencies and their licenses

## References

1. “Email Statistics Report, 2015–2019,” The Radicati Group, Inc., Palo Alto, California, United States, Nov. 2019. Accessed: Feb. 25, 2020. [Online]. Available: [https://www.radicati.com/wp/wp-content/uploads/2015/02/Email-Statistics-Report-2015-2019-Executive-Summary.pdf](https://www.radicati.com/wp/wp-content/uploads/2015/02/Email-Statistics-Report-2015-2019-Executive-Summary.pdf)
1. S. Blaszkiewicz, “Online Booking Options Can Get You More Clients,” GetApp Lab, Mar. 2018. Accessed: Feb. 25, 2020. [Online]. Available: [https://lab.getapp.com/research-online-booking-importance-of-appointment-scheduling/](https://lab.getapp.com/research-online-booking-importance-of-appointment-scheduling/)
1. D. Mortensen, “4 Ways AI Is Remaking Sales,” x.ai, Sep. 2017. Accessed: Mar. 4, 2020. [Online]. Available: [https://x.ai/4-ways-ai-is-remaking-sales/](https://x.ai/4-ways-ai-is-remaking-sales/)
1. D. Mortensen, “How we calculate our AI’s ROI,” x.ai, Apr. 2018. Accessed: Mar. 4, 2020. [Online]. Available: [https://x.ai/how-we-calculate-our-ais-roi/](https://x.ai/how-we-calculate-our-ais-roi/)
1. “2019 SBA Fact Sheet – Netherlands,” European Commission, Nov. 2019. Accessed: Mar. 15, 2020. [Online]. Available: [https://ec.europa.eu/docsroom/documents/38662/attachments/21/translations/en/renditions/native](https://ec.europa.eu/docsroom/documents/38662/attachments/21/translations/en/renditions/native)
1. C. M. Kincaid, P. B. Dupont, A. R. Kaye, “Electronic Calendars in the Office: An Assessment of User Needs and Current Technology”, _ACM TiiS_, vol. 3, no. 1, pp. 89–102, Jan. 1985, doi: 10.1145/3864.3868.
1. “Salary, Minimum Wage And Payslips In The Netherlands,” IamExpat. Accessed: Mar. 26, 2020. [Online]. Available: [https://www.iamexpat.nl/career/working-in-the-netherlands/salary-payslip-dutch-minimum-wage](https://www.iamexpat.nl/career/working-in-the-netherlands/salary-payslip-dutch-minimum-wage)
1. J. Cranshaw et al., “Calendar.help: Designing a Workflow-Based Scheduling Agent with Humans in the Loop,” May 2017, doi: 10.1145/3025453.3025780.
1. J. Wajcman, “The Digital Architecture of Time Management,” _ST&HV_, vol. 44, no. 2, pp. 315–337, Mar. 2019, doi: 10.1177/0162243918795041.
1. “Printing Press,” History.com, 2020. Accessed: Apr. 09, 2020. [Online]. Available: [https://www.history.com/topics/inventions/printing-press](https://www.history.com/topics/inventions/printing-press)
1. Imanuel, “Top 10 Free and Premium Calendaring Software in 2020,” PAT Research. Accessed: Apr. 01, 2020. [Online]. Available: [https://www.predictiveanalyticstoday.com/top-calendaring-software/](https://www.predictiveanalyticstoday.com/top-calendaring-software/)
1. M. Masli, W. Geyer, C. Dugan, B. Brownholtz, “The design and usage of tentative events for time-based social coordination in the enterprise,” _Proc. 20th Int. Conf. World Wide Web_, pp. 765–774, Apr. 2011, doi: 10.1145/1963405.1963512.
1. “Google Apps @ UT for students,” University of Twente. Accessed: Apr. 10, 2020. [Online]. Available: [https://www.utwente.nl/en/products-services/product/l829834/google-apps-ut-for-students](https://www.utwente.nl/en/products-services/product/l829834/google-apps-ut-for-students)
1. S. F. Ehrlich, “Strategies for Encouraging Successful Adoption of Office Communication Systems,” _ACM TiiS_, vol. 5, no. 4, pp. 340–357, Oct. 1987, doi: 10.1145/42196.42198.
1. T. Erickson, C. M. Danis, W. A. Kellogg, M. E. Helander, “Assistance: the work practices of human administrative assistants and their implications for it and organizations,” _Proc. 2008 ACM Conf. Comput. Supported Cooperative Work_, pp. 609–618, Nov. 2008, doi: 10.1145/1460563.1460658.
1. N. R. Jennings, A. J. Jackson, “Agent-based meeting scheduling: a design and implementation,” _Electron. Lett._, vol. 31, no. 5, pp. 350–352, Mar. 1995, doi: 10.1049/el:19950245.
1. P. M. Berry, M. Gervasio, B. Peintner, and N. Yorke-Smith, “PTIME: Personalized assistance for calendaring,” _ACM TiiS_, vol. 2, no. 4, pp. 1–22, Jul. 2011, doi: 10.1145/1989734.1989744.
1. J. F. Kelley, A. Chapanis, “How professional persons keep their calendars: Implications for computerization”, _J. Occupat. Psychol._, vol. 55, no. 4, pp. 241–256, Dec. 1982, doi: 10.1111/j.2044-8325.1982.tb00098.x.
1. S. Schieffer, “Google Calendar for Android: Find a time for my meeting,” Google, Mountain View, California, United States, Apr. 2016. Accessed: Apr. 13, 2020. [Online]. Available: [https://blog.google/products/calendar/google-calendar-for-android-find-time/](https://blog.google/products/calendar/google-calendar-for-android-find-time/).
1. N. Ducheneaut, V. Bellotti, “E-mail as habitat: an exploration of embedded personal information management,” _ACM Interact._, vol. 8, no. 5, pp. 30–38, Sep. 2001, doi: 10.1145/382899.383305.
1. A. de Barcelos Silva et al., “Intelligent personal assistants: A systematic literature review,” _Expert Syst. with Appl._, vol. 147, no. 113193, Jun. 2020, doi: 10.1016/j.eswa.2020.113193.
1. J. Kiseleva, K. Williams, A. Hassan Awadallah, A.C. Crook, I. Zitouni, T. Anastasakos, “Predicting user satisfaction with intelligent assistants,” _Proc. 39th Int. ACM SIGIR Conf. Res. and Develop. Inf. Retrieval_, ACM Press, pp. 45–54, Jul. 2016, doi: 10.1145/2911451.2911521.
1. J. F. Kelley, “An iterative design methodology for user-friendly natural language office information applications,” _ACM TiiS_, vol. 2, no. 1, pp. 26-41, Jan. 1984, doi: 10.1145/357417.357420.
1. G. Linden, B. Smith, J. York, “Amazon.com recommendations: item-to-item collaborative filtering,” _IEEE Internet Comput._, vol. 7, no. 1, pp. 76–80, Jan 2003, doi: 10.1109/MIC.2003.1167344.
1. C. A. Gomez-Uribe, N. Hunt, “The Netflix Recommender System: Algorithms, Business Value, and Innovation,” _ACM TMIS_, vol. 6, no. 2, pp. 13.1–13.19, Dec. 2015, doi: 10.1145/2843948.
1. G. Adomavičius, A. Tuzhilin, “Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions,” _IEEE Trans. Knowl. Data Eng._, vol. 17, no. 6, pp. 734–749, Jun. 2005, doi:10.1109/TKDE.2005.99.
1. G. Adomavičius, R. Sankaranarayanan, S. Sen, A. Tuzhilin, “Incorporating contextual information in recommender systems using a multidimensional approach,” _ACM TiiS_, vol. 23, no. 1, pp. 103–145, Jan. 2005, doi: 10.1145/1055709.1055714.
1. A. Zunino, M. Campo, “Chronos: A multi-agent system for distributed automatic meeting scheduling,” _Expert Syst. with Appl._, vol. 36, no. 3.2, pp. 7011–7018, Apr. 2009, doi: 10.1016/j.eswa.2008.08.024.
1. B. Desruisseaux, “Internet Calendaring and Scheduling Core Object Specification (iCalendar),” _Internet Eng. Task Force_, Sep. 2009, doi: 10.17487/RFC5545.


