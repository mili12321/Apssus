import { EmailPreview } from 'EmailPreview.jsx'
export function EmailList({ emails }) {
    return (
            <div className="email-list-container">
                <table>
                    <tr>
                      <th>icons</th>
                      <th>icons</th>
                      <th>subject</th>
                      <th>body</th>
                      <th>time</th>
                    </tr>
                    
                        { emails.map(email =>
                                <EmailPreview email={ email } />
                            )
                        }
                   
                </table>
            </div>
    )
}