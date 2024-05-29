import React, { useState } from 'react';

const HoanThanhKhaoSat: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    return (
        <div className="h-full bg-ys-lightblue">
            <div className="h-full grid items-center mx-20 ">
                <p className="text-ys-blue font-bold text-center mt-11">BẠN ĐÃ HOÀN THÀNH KHẢO SÁT</p>

                <label className="border rounded h-16 flex items-center justify-center bg-white">
                    <span className="text-ys-orange font-bold text-2xl ">Khẩu vị rủi ro: Thấp</span>
                </label>

                <p className="text-center font-bold text-gray-600">
                    Một nhà đầu tư có khẩu vị rủi ro thấp thường hướng tới một kết quả đảm bảo, tránh xa các khoản đầu
                    tư rủi ro cao hay biến động mạnh. Sự ổn định sẽ được coi là ưu tiên hơn một lợi nhuận cao.
                </p>

                <p className="text-center font-bold text-gray-600 mt-10">Để xem chi tiết danh mục vui lòng nhập</p>

                <p className="text-ys-blue font-bold text-center">SỐ TIỀN ĐẦU TƯ BAN ĐẦU</p>

                <label className="border rounded h-16 flex items-center bg-white">
                    <input
                        className="text-ys-orange text-2xl w-full h-full text-center focus:outline-none "
                        placeholder="Vui lòng nhập số tiền bạn muốn đầu tư"
                    ></input>
                </label>
            </div>
        </div>
    );
};

export default HoanThanhKhaoSat;
