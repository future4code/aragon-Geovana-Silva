export const irParaHome = (navigate) => {
    navigate("/");
};

export const irParaAdm = (navigate) => {
    navigate("/admin");
};

export const irParaDetalhes = (navigate, viagemId) => {
    navigate(`/admin/${viagemId}/details`);
};