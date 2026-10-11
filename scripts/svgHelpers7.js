// SVG Diagram Generator Helpers for Class 7 Scholarship
// Higher Primary Level: Parallel Lines, Transversals, Pythagorean Triangles, Venn Diagrams, Clocks, Mirror & Water

function getParallelLinesSvg(angle1 = 70, angle2 = 110) {
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-blue-50/50 rounded-xl border border-blue-200">
        <svg width="180" height="130" viewBox="0 0 180 130">
            <!-- Line l -->
            <line x1="20" y1="35" x2="160" y2="35" stroke="#1e3a8a" stroke-width="3"/>
            <text x="165" y="38" font-size="11" font-weight="bold" fill="#1e3a8a">l</text>
            <!-- Line m -->
            <line x1="20" y1="95" x2="160" y2="95" stroke="#1e3a8a" stroke-width="3"/>
            <text x="165" y="98" font-size="11" font-weight="bold" fill="#1e3a8a">m</text>
            <!-- Transversal n -->
            <line x1="50" y1="10" x2="130" y2="120" stroke="#dc2626" stroke-width="2.5"/>
            <text x="135" y="125" font-size="11" font-weight="bold" fill="#dc2626">n</text>
            <!-- Angle markers -->
            <text x="75" y="30" font-size="11" font-weight="bold" fill="#dc2626">∠१ (${angle1}°)</text>
            <text x="110" y="90" font-size="11" font-weight="bold" fill="#dc2626">∠२</text>
        </svg>
        <span class="mt-1 text-xs font-bold text-blue-900">रेषा l || रेषा m असून रेषा n ही त्यांची छेदिका आहे</span>
    </div>`;
}

function getPythagorasSvg(base = 12, height = 5, hyp = 13) {
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-emerald-50/50 rounded-xl border border-emerald-200">
        <svg width="160" height="120" viewBox="0 0 160 120">
            <!-- Right triangle -->
            <polygon points="30,20 30,100 130,100" fill="#ecfdf5" stroke="#059669" stroke-width="3"/>
            <rect x="30" y="85" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="2"/>
            <text x="15" y="60" font-size="11" font-weight="bold" fill="#065f46">${height} सेमी</text>
            <text x="75" y="115" font-size="11" font-weight="bold" fill="#065f46">पाया = ${base} सेमी</text>
            <text x="85" y="55" font-size="11" font-weight="bold" fill="#b91c1c">कर्ण = ${hyp} सेमी</text>
        </svg>
        <span class="mt-1 text-xs font-bold text-emerald-900">काटकोन त्रिकोण: कर्ण² = पाया² + उंची²</span>
    </div>`;
}

function getVennDiagramSvg(labelA = "क्रिकेट", labelB = "फुटबॉल", onlyA = 15, common = 5, onlyB = 10) {
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-purple-50/50 rounded-xl border border-purple-200">
        <svg width="180" height="110" viewBox="0 0 180 110">
            <circle cx="65" cy="55" r="45" fill="#e0e7ff" fill-opacity="0.6" stroke="#4338ca" stroke-width="2.5"/>
            <circle cx="115" cy="55" r="45" fill="#fce7f3" fill-opacity="0.6" stroke="#be185d" stroke-width="2.5"/>
            <text x="45" y="60" font-size="12" font-weight="bold" fill="#312e81">${onlyA}</text>
            <text x="90" y="60" font-size="12" font-weight="bold" fill="#831843">${common}</text>
            <text x="135" y="60" font-size="12" font-weight="bold" fill="#831843">${onlyB}</text>
            <text x="45" y="15" font-size="10" font-weight="bold" fill="#4338ca">${labelA}</text>
            <text x="135" y="15" font-size="10" font-weight="bold" fill="#be185d">${labelB}</text>
        </svg>
        <span class="mt-1 text-xs font-bold text-purple-900">वेन आकृती: दोन्ही खेळ खेळणारे विद्यार्थी = ${common}</span>
    </div>`;
}

function getClockAngleSvg(hours, minutes, angleText) {
    const hDeg = (hours % 12) * 30 + minutes * 0.5;
    const mDeg = minutes * 6;
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-amber-50/50 rounded-xl border border-amber-200">
        <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="62" fill="#ffffff" stroke="#b45309" stroke-width="4"/>
            <circle cx="70" cy="70" r="5" fill="#b45309"/>
            <text x="70" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">12</text>
            <text x="118" y="74" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">3</text>
            <text x="70" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">6</text>
            <text x="22" y="74" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">9</text>
            <!-- Hour Hand -->
            <line x1="70" y1="70" x2="70" y2="40" stroke="#b91c1c" stroke-width="4" stroke-linecap="round" transform="rotate(${hDeg} 70 70)"/>
            <!-- Minute Hand -->
            <line x1="70" y1="70" x2="70" y2="22" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round" transform="rotate(${mDeg} 70 70)"/>
        </svg>
        <span class="mt-1 text-xs font-bold text-amber-900">${angleText}</span>
    </div>`;
}

function getMirrorAdvancedSvg(content) {
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-purple-50/50 rounded-xl border border-purple-200">
        <div class="flex items-center gap-6">
            <div class="w-16 h-16 flex items-center justify-center border-2 border-purple-600 bg-white rounded-lg text-2xl font-black text-purple-900 shadow-sm">${content}</div>
            <div class="flex flex-col items-center">
                <div class="h-16 w-1 border-r-2 border-dashed border-red-500"></div>
                <span class="text-[10px] font-black text-red-600 uppercase mt-1">आरसा (Mirror)</span>
            </div>
            <div class="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-50 rounded-lg text-2xl font-black text-gray-500">?</div>
        </div>
        <span class="mt-2 text-xs font-bold text-purple-900">आरशातील अचूक प्रतिमा ओळखा</span>
    </div>`;
}

function getWaterAdvancedSvg(content) {
    return `<div class="flex flex-col items-center justify-center my-3 p-3 bg-cyan-50/50 rounded-xl border border-cyan-200">
        <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 flex items-center justify-center border-2 border-cyan-600 bg-white rounded-lg text-2xl font-black text-cyan-900 shadow-sm">${content}</div>
            <div class="w-32 h-1 border-b-2 border-dashed border-blue-500 my-1"></div>
            <span class="text-[10px] font-black text-blue-600 uppercase">पाण्याची पातळी (Water Surface)</span>
            <div class="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-50 rounded-lg text-2xl font-black text-gray-500">?</div>
        </div>
        <span class="mt-2 text-xs font-bold text-cyan-900">पाण्यातील अचूक प्रतिबिंब ओळखा</span>
    </div>`;
}

module.exports = {
    getParallelLinesSvg,
    getPythagorasSvg,
    getVennDiagramSvg,
    getClockAngleSvg,
    getMirrorAdvancedSvg,
    getWaterAdvancedSvg
};
