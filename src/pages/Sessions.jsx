import "./css/sessions.css";

export default function Sessions() {
    return (
        <>
            <h2 className="text-center my-3 sub-heading">
                Call For Special Sessions in RAMSA 2024
            </h2>
            <section>
                <div>
                    <div>
                        The RAMSA 2024 team invites proposals for Special
                        Sessions within the aims and scope of the conference,
                        following these guidelines:
                        <ul>
                            <li>
                                Each session should consist of{" "}
                                <b>at least 5 paper</b> presentations.
                            </li>
                            <li>
                                The Session organizer will be responsible for
                                advertising the session and reviewing the
                                abstracts/papers in strict accordance with RAMSA
                                Conference norms.
                            </li>
                            <li>
                                Session organizers will have the opportunity to
                                chair or co-chair the session, and they will be
                                eligible for a registration fee waiver for one
                                of their papers for RAMSA 2024 if their session
                                has at least 5 paper registrations.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Submission of Proposals  */}
                <h3 className="sub-heading">Submission of Proposals:</h3>
                <div>
                    Please include the following information in your proposal:
                    <ul>
                        <li>Session title.</li>
                        <li>
                            Name(s), affiliation(s), mailing address, and email
                            address(es) of the proposer(s).
                        </li>
                        <li>
                            A concise description of the session topic (not
                            exceeding 100 words).
                        </li>
                    </ul>
                    The deadline for proposal submission is November 20, 2023.
                    Please send your proposals to
                    ramsa.conference2024@gmail.com.
                </div>
                <h3 className="sub-heading">Important Information:</h3>
                <div>
                    <ul>
                        <li>
                            Abstract/Papers for Sessions should be submitted
                            directly to the corresponding session organizers.
                        </li>
                        <li>
                            After the abstract/paper selection, the Sessions
                            organizers must send the final accepted
                            abstracts/papers to ramsa.conference2024@gmail.com,
                            no later than the deadlines defined by the
                            conference.
                        </li>
                        <li>
                            For any further clarifications or queries, please do
                            not hesitate to contact at{" "}
                            <span className="text-info">
                                <b>ramsa.conference2024@gmail.com</b>
                            </span>
                        </li>
                    </ul>
                    <a
                        href="https://sites.google.com/view/ramsa-24-confirmed-sessions/home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn-success">
                            CONFIRMED SESSIONS
                        </button>
                    </a>
                </div>{" "}
                <br />
            </section>
        </>
    );
}
