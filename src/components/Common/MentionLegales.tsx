interface MentionLegalesProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function MentionLegales({ setIsOpen }: MentionLegalesProps) {
  return (
    <>
      {
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Mentions Légales
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Ce site web est la propriété de Éric PHILIPPE.
                        <br />
                        <br />
                        <span className="font-bold">Coordonnées</span>
                        <br />
                        Éric PHILIPPE
                        <br />
                        ericphlpp@proton.me
                        <br />
                        <br />
                        <span className="font-bold">Hébergement</span>
                        <br />
                        Ce site est hébergé par Github Pages.
                        <br />
                        <br />
                        <span className="font-bold">
                          Propriété intellectuelle
                        </span>
                        <br />
                        L'ensemble des éléments figurant sur ce site sont
                        protégés par les dispositions du Code de la Propriété
                        Intellectuelle. En conséquence, toute reproduction de
                        ceux-ci, totale ou partielle, ou imitation, sans accord
                        exprès, préalable et écrit, est interdite.
                        <br />
                        <br />
                        <span className="font-bold">Données personnelles</span>
                        <br />
                        Aucune donnée personnelle n'est collectée sur ce site.
                        <br />
                        <br />
                        <span className="font-bold">Cookies</span>
                        <br />
                        Aucun cookie n'est utilisé sur ce site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
