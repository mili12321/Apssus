export function EmailPreview({ email }) {
    return <tr className="email-preview" key={ email.id }>
                <td>icons</td>
                <td className="email-subject">
                    { email.subject }
                </td>
                <td className="email-body">
                    { email.body }
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </td>
                <td> 
                  { email.sentAt }
                </td>
{/* <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
  
</table> */}
            </tr>
}