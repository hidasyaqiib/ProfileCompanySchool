import React from "react";
import { FaEye } from "react-icons/fa";

const Accreditation: React.FC = () => {
    return (
        <section className="grid grid-cols-2 gap-4 p-8 m-6">
            <div className="flex justify-center items-center w-full h-full">
                <img src="/assets/image/accreditation.webp" alt="Akreditasi" className="w-md h-full" />
            </div>
            <div className="flex flex-col justify-center px-10 py-8 max-w-xl">
                <h2 className="text-5xl font-bold mb-6 text-black">
                    Terakreditasi <span className="text-[#27ae60]">A</span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    Berdasarkan Keputusan Badan Akreditasi Nasional Sekolah/Madrasah
                    Nomor: 036/BAN-PDM/SK/2023, menyatakan bahwa MI NU 02 Situwangi
                    <span className="font-semibold text-[#27ae60]"> Terakreditasi A (UNGGUL)</span>
                    dengan nilai 92. Akreditasi ini berlaku hingga 29 Agustus 2028.
                </p>

                <button className="mt-6 px-6 py-3 bg-[#27ae60] text-white font-semibold rounded-md shadow-md hover:bg-[#2ecc71] transition duration-300 w-fit flex items-center gap-2">
                    <FaEye />
                    Lihat
                </button>
            </div>
        </section>

    )
};

export default Accreditation;
