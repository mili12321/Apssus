import { EmailPreview } from 'EmailPreview.jsx'

export function EmailList({ emails, onRemoveEmail,onCountUnreadMails }) {
    return (
            <div className="email-list-container">
                <table>
                    <thead>
                        <tr>
                          <th>icons</th>
                          <th>sender</th>
                          <th>subject</th>
                          <th>body</th>
                          <th>time</th>
                        </tr>
                    </thead>
                    <tbody>
                    { emails.map((email,idx) =>
                                <EmailPreview email={ email } idx={idx} key={ email.id } onRemoveEmail={onRemoveEmail}/>
                            )
                        }
                   </tbody>
                </table>
            </div>
    )
}
