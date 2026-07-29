import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Responsable du traitement',
    content: [
      "Le responsable du traitement des données à caractère personnel collectées sur la plateforme Babi Services est la société Babi Services, dont le siège est situé à Abidjan, Côte d'Ivoire.",
      "Pour toute question relative à la présente politique ou à l'exercice de vos droits, vous pouvez nous contacter à l'adresse : contact@babiservices.ci."
    ]
  },
  {
    title: '2. Données collectées',
    content: [
      "Nous collectons les données que vous nous transmettez directement lors de la création de votre compte, de votre candidature comme prestataire, ou de l'utilisation de nos services :",
    ],
    list: [
      'Identité : nom, prénom',
      'Coordonnées : adresse email, numéro de téléphone',
      'Localisation : quartier ou zone d\'intervention (pour les prestataires)',
      'Données de connexion : identifiant de session, mot de passe (stocké de façon chiffrée)',
      'Historique des réservations et des échanges avec les prestataires ou clients'
    ]
  },
  {
    title: '3. Finalités du traitement',
    content: [
      "Vos données sont utilisées exclusivement pour les finalités suivantes :"
    ],
    list: [
      'Créer et gérer votre compte utilisateur ou prestataire',
      'Assurer la mise en relation entre clients et prestataires de services',
      'Traiter et suivre vos réservations',
      'Vous contacter concernant votre compte ou une prestation en cours',
      "Assurer la sécurité de la plateforme et prévenir la fraude",
      "Répondre à nos obligations légales et réglementaires"
    ]
  },
  {
    title: '4. Base légale',
    content: [
      "Les traitements réalisés reposent sur l'exécution du contrat qui vous lie à Babi Services (création de compte, mise en relation, réservation), sur votre consentement lorsque celui-ci est requis (par exemple pour l'envoi de communications non essentielles), ainsi que, le cas échéant, sur le respect d'obligations légales."
    ]
  },
  {
    title: '5. Durée de conservation',
    content: [
      "Vos données sont conservées pendant toute la durée de votre relation avec Babi Services, puis archivées pendant une durée n'excédant pas ce qui est nécessaire au respect de nos obligations légales ou à la gestion d'éventuels litiges, avant d'être supprimées ou anonymisées."
    ]
  },
  {
    title: '6. Partage des données',
    content: [
      "Vos données ne sont partagées qu'avec les parties strictement nécessaires à la fourniture du service : le prestataire ou le client concerné par une réservation (dans la limite des informations nécessaires à la mise en relation), et nos prestataires techniques (hébergement, paiement) agissant pour notre compte.",
      "Babi Services ne vend ni ne loue vos données personnelles à des tiers à des fins commerciales."
    ]
  },
  {
    title: '7. Sécurité',
    content: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l'accès non autorisé, la perte, l'altération ou la divulgation, notamment le chiffrement des mots de passe et le contrôle des accès à nos systèmes."
    ]
  },
  {
    title: '8. Vos droits',
    content: [
      "Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez des droits suivants sur vos données :"
    ],
    list: [
      "Droit d'accès à vos données personnelles",
      'Droit de rectification en cas de données inexactes ou incomplètes',
      "Droit à l'effacement de vos données, dans les conditions prévues par la loi",
      "Droit d'opposition au traitement de vos données pour motif légitime",
      "Droit à la limitation du traitement"
    ],
    content2: [
      "Pour exercer l'un de ces droits, contactez-nous à contact@babiservices.ci. Une réponse vous sera apportée dans un délai raisonnable."
    ]
  },
  {
    title: '9. Cookies',
    content: [
      "La plateforme peut utiliser des cookies strictement nécessaires à son fonctionnement (par exemple pour maintenir votre session de connexion). Aucun cookie de mesure d'audience ou publicitaire n'est déposé sans votre consentement préalable."
    ]
  },
  {
    title: '10. Modifications',
    content: [
      "La présente politique de confidentialité peut être mise à jour pour refléter des évolutions légales, techniques ou organisationnelles. La date de dernière mise à jour est indiquée ci-dessous."
    ]
  }
]

function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-babi-green transition-colors mb-6">
          ← Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-babi-dark font-bricolage mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-gray-400 mb-10">Dernière mise à jour : 28 juillet 2026</p>

        <div className="flex flex-col gap-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-lg font-bold text-babi-dark font-bricolage mb-2">{section.title}</h2>
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-2">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-2 flex flex-col gap-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.content2 && section.content2.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-2">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PolitiqueConfidentialite