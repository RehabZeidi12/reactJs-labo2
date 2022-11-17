import React from "react";
class GenListe extends React.Component {
    render() {
        const { code, nom, prenom } = this.props.utilisateur;
        return (
            <tr>
                <td>{code}</td>
                <td>{nom}</td>
                <td>{prenom}</td>
            </tr>
        )
    }
}
export default GenListe