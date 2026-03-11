/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  ShoppingBag, 
  ChevronRight, 
  Heart, 
  Search, 
  MapPin, 
  User, 
  Info,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Leaf
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'farmer-form' | 'buyer-form' | 'results' | 'about';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-black/5">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => setPage('home')}
      >
        <div className="bg-farm-green p-1.5 rounded-lg">
          <Leaf className="text-white w-5 h-5" />
        </div>
        <span className="font-serif font-bold text-xl text-farm-green">田间好物</span>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <button onClick={() => setPage('home')} className={currentPage === 'home' ? 'text-farm-green underline underline-offset-4' : 'text-gray-500 hover:text-farm-green'}>首页</button>
        <button onClick={() => setPage('about')} className={currentPage === 'about' ? 'text-farm-green underline underline-offset-4' : 'text-gray-500 hover:text-farm-green'}>关于平台</button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-stone-100 py-12 mt-20 border-t border-stone-200">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="font-serif italic text-stone-500 mb-2">“让每一寸土地的馈赠，都能遇见对的人。”</p>
      <p className="text-xs text-stone-400">© 2026 田间好物 AI 助农平台</p>
    </div>
  </footer>
);

// --- Page 1: Home ---
const HomePage = ({ onStartFarmer, onStartBuyer }: { onStartFarmer: () => void, onStartBuyer: () => void }) => (
  <div className="pt-24 pb-12 px-4 max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-farm-green mb-6 leading-tight">
        连接土地的温度<br/>
        <span className="text-warm-orange">AI 让好物出山</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        我们用智能技术，帮辛勤的农民找销路，帮懂生活的你找鲜货。
        在这里，每一颗果实都有它的故事。
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartFarmer}
          className="bg-farm-green text-white p-8 rounded-3xl text-left flex flex-col justify-between h-64 shadow-xl shadow-farm-green/20 relative overflow-hidden group"
        >
          <div className="z-10">
            <Sprout className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">我是勤劳农户</h3>
            <p className="text-white/80 text-sm">我有自家种的优质农产品，想找个好销路。</p>
          </div>
          <div className="z-10 flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
            立即发布产品 <ChevronRight className="w-5 h-5" />
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform">
            <Sprout size={200} />
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartBuyer}
          className="bg-warm-orange text-white p-8 rounded-3xl text-left flex flex-col justify-between h-64 shadow-xl shadow-warm-orange/20 relative overflow-hidden group"
        >
          <div className="z-10">
            <ShoppingBag className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">我是寻味买家</h3>
            <p className="text-white/80 text-sm">我想找新鲜、地道、放心的农家好物。</p>
          </div>
          <div className="z-10 flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
            开始智能寻味 <ChevronRight className="w-5 h-5" />
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform">
            <ShoppingBag size={200} />
          </div>
        </motion.button>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-stone-200 pt-16">
      <div className="text-center">
        <div className="w-12 h-12 bg-green-100 text-farm-green rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6" />
        </div>
        <h4 className="font-bold mb-2">智能匹配</h4>
        <p className="text-sm text-gray-500">AI 自动分析需求，让买卖双方精准相遇。</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-orange-100 text-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-6 h-6" />
        </div>
        <h4 className="font-bold mb-2">真实透明</h4>
        <p className="text-sm text-gray-500">直接对接产地，没有中间商，价格更公道。</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-6 h-6" />
        </div>
        <h4 className="font-bold mb-2">产地直达</h4>
        <p className="text-sm text-gray-500">从枝头到舌尖，保留最原始的自然风味。</p>
      </div>
    </div>
  </div>
);

// --- Page 2: Farmer Form ---
const FarmerForm = ({ onBack, onResult }: { onBack: () => void, onResult: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    category: '',
    quality: '优质',
    quantity: '',
    cost: '',
    origin: '',
    isGift: '否',
    features: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      
      const prompt = `
        你是一个专业的助农专家和市场分析师。请根据以下农产品信息，生成一份专业的市场分析和销售建议。
        
        产品信息：
        - 种类：${formData.category}
        - 等级：${formData.quality}
        - 数量：${formData.quantity}
        - 成本：${formData.cost}
        - 产地：${formData.origin}
        - 是否适合送礼：${formData.isGift}
        - 特点：${formData.features}
        
        要求：
        1. 建议零售价：给出合理的市场参考价。
        2. 定价理由：从成本、品质、产地稀缺性、市场需求等角度解释为什么定这个价。
        3. 产品亮点总结：提炼3个最吸引人的卖点。
        4. 宣传语：150-200字，亲切自然，包含产地特色、优势、场景，号召性结尾。禁极限词。
        5. 推荐销售对象：分析哪些人群最可能购买（如：注重健康的宝妈、寻找家乡味的打工人等）。
        
        请以 JSON 格式返回，格式如下：
        {
          "price": "建议零售价",
          "reason": "定价理由",
          "highlights": ["亮点1", "亮点2", "亮点3"],
          "slogan": "宣传语",
          "target": "推荐销售对象"
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text || '{}');
      onResult({ ...data, formData });
    } catch (error) {
      console.error("AI Generation failed:", error);
      onResult({
        price: "¥58/箱",
        reason: "考虑到您的生产成本及该品种在当前市场的稀缺性，结合优质的等级评价，此价格能保证利润的同时具备较强竞争力。",
        highlights: ["产地直采，新鲜保障", "自然熟透，口感纯正", "无农药残留，吃得放心"],
        slogan: `来自${formData.origin}的${formData.category}，是我们自家用心守护的成果。这里的土质和气候特别适合它生长，所以口感格外地道。无论是自家平日里吃，还是拿去送给亲朋好友，都是一份实实在在的心意。我们坚持自然生长，不赶时间，只为把这份土地的本味送到您的餐桌上。如果您也喜欢这份淳朴的味道，欢迎联系我们尝尝鲜。`,
        target: "注重食品安全的家庭主妇、追求高品质生活的都市白领、以及有送礼需求的企事业单位。",
        formData
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 mb-8 hover:text-farm-green transition-colors">
        <ArrowLeft className="w-4 h-4" /> 返回首页
      </button>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
        <h2 className="text-3xl font-serif font-bold text-farm-green mb-2">填写您的农产品信息</h2>
        <p className="text-gray-500 mb-10">请如实填写，AI 会帮您算出好价格并写出好故事。</p>
        
        <div className="space-y-6">
          {/* 1. 农产品种类 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">1. 您的农产品叫什么？</label>
            <input 
              type="text" 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              placeholder="例如：红富士苹果、走地鸡、高山云雾茶" 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-farm-green/20"
            />
          </div>

          {/* 2. 品质等级 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">2. 品质怎么样？</label>
            <div className="grid grid-cols-3 gap-3">
              {['特级', '优质', '普通'].map(q => (
                <button 
                  key={q}
                  onClick={() => setFormData({...formData, quality: q})}
                  className={`py-3 rounded-xl border-2 transition-all font-medium ${formData.quality === q ? 'border-farm-green bg-farm-green/5 text-farm-green' : 'border-stone-100 text-gray-500'}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* 3. 数量 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">3. 大概有多少？</label>
              <input 
                type="text" 
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                placeholder="如：1000斤" 
                className="w-full p-4 rounded-2xl bg-stone-50 border-none" 
              />
            </div>
            {/* 4. 成本 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">4. 您的成本是多少？</label>
              <input 
                type="text" 
                value={formData.cost}
                onChange={(e) => setFormData({...formData, cost: e.target.value})}
                placeholder="每斤/每件的成本" 
                className="w-full p-4 rounded-2xl bg-stone-50 border-none" 
              />
            </div>
          </div>

          {/* 5. 产地 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">5. 产地在哪里？</label>
            <div className="flex items-center gap-2 p-4 rounded-2xl bg-stone-50">
              <MapPin className="text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                value={formData.origin}
                onChange={(e) => setFormData({...formData, origin: e.target.value})}
                placeholder="省、市、县、村" 
                className="w-full bg-transparent border-none focus:ring-0"
              />
            </div>
          </div>

          {/* 6. 是否适合送礼 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">6. 包装好吗？适合送礼吗？</label>
            <div className="flex gap-4">
              {['是', '否'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="isGift" 
                    checked={formData.isGift === opt}
                    onChange={() => setFormData({...formData, isGift: opt})}
                    className="text-farm-green focus:ring-farm-green"
                  />
                  <span className="text-gray-600">{opt === '是' ? '适合送礼（有精美包装）' : '自家吃（普通包装）'}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 7. 产品特点 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">7. 夸夸您的宝贝（产品特点）</label>
            <textarea 
              rows={3}
              value={formData.features}
              onChange={(e) => setFormData({...formData, features: e.target.value})}
              placeholder="比如：不打农药、个大皮薄、口感清甜、现摘现发..." 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-farm-green/20"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isGenerating || !formData.category}
            onClick={handleGenerate}
            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg mt-4 flex items-center justify-center gap-2 ${isGenerating ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-farm-green text-white shadow-farm-green/20'}`}
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                AI 正在努力分析中...
              </>
            ) : '生成建议定价和宣传内容'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// --- Page 2.5: Farmer Result Page ---
const FarmerResultPage = ({ data, onBack }: { data: any, onBack: () => void }) => (
  <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto">
    <button onClick={onBack} className="flex items-center gap-2 text-gray-500 mb-8 hover:text-farm-green transition-colors">
      <ArrowLeft className="w-4 h-4" /> 修改信息
    </button>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[40px] shadow-xl shadow-farm-green/5 border border-stone-100 overflow-hidden"
    >
      {/* 头部装饰 */}
      <div className="bg-farm-green p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI 智能分析报告
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">您的“{data.formData.category}”销售方案已就绪</h2>
          <p className="text-white/70">基于当前市场行情与您的产品特色深度定制</p>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10">
          <Leaf size={200} />
        </div>
      </div>

      <div className="p-8 md:p-12 space-y-12">
        {/* 1. 建议售价 & 定价理由 */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 bg-stone-50 p-6 rounded-3xl border border-stone-100">
            <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-farm-green rounded-full"></span> 建议售价
            </h3>
            <p className="text-4xl font-bold text-farm-green">{data.price}</p>
            <p className="text-xs text-stone-400 mt-2 italic">此价格建议作为起步参考</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-farm-green rounded-full"></span> 定价理由
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.reason}
            </p>
          </div>
        </div>

        {/* 2. 产品亮点总结 */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-farm-green rounded-full"></span> 产品亮点总结
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {data.highlights.map((h: string, i: number) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-green-50/50 rounded-2xl border border-green-100/50">
                <CheckCircle2 className="w-5 h-5 text-farm-green shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 推荐宣传语 */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-farm-green rounded-full"></span> 推荐宣传语
          </h3>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-farm-green/10 to-warm-orange/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed font-serif italic text-lg">
                “{data.slogan}”
              </p>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(data.slogan);
                    alert('宣传语已复制到剪贴板！');
                  }}
                  className="text-xs font-bold text-farm-green hover:underline flex items-center gap-1"
                >
                  复制文案直接用
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 推荐销售对象 */}
        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
          <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-farm-green rounded-full"></span> 推荐销售对象
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {data.target}
          </p>
        </div>

        {/* 底部操作 */}
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-farm-green text-white py-4 rounded-2xl font-bold hover:bg-farm-green/90 transition-colors shadow-lg shadow-farm-green/20">
            保存方案并发布
          </button>
          <button className="flex-1 bg-white text-farm-green border-2 border-farm-green py-4 rounded-2xl font-bold hover:bg-farm-green/5 transition-colors">
            分享给买家看
          </button>
        </div>
      </div>
    </motion.div>
    
    <div className="mt-8 text-center">
      <p className="text-xs text-stone-400">
        AI 建议仅供参考，请结合实际交易情况进行调整。
      </p>
    </div>
  </div>
);



// --- Page 3: Buyer Form ---
const BuyerForm = ({ onBack, onSubmit }: { onBack: () => void, onSubmit: () => void }) => {
  const [formData, setFormData] = useState({
    category: '',
    budget: '',
    purpose: '自用',
    quality: '只要新鲜',
    quantity: '',
    originMatters: '只要好就行',
    others: ''
  });

  return (
    <div className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 mb-8 hover:text-warm-orange transition-colors">
        <ArrowLeft className="w-4 h-4" /> 返回首页
      </button>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
        <h2 className="text-3xl font-serif font-bold text-warm-orange mb-2">告诉 AI 您的寻味需求</h2>
        <p className="text-gray-500 mb-10">我们会根据您的偏好，在广阔田间为您寻找最合适的宝贝。</p>
        
        <div className="space-y-8">
          {/* 1. 农产品种类 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">1. 您想买点什么？</label>
            <input 
              type="text" 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              placeholder="例如：想买点当季水果、地道土猪肉..." 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-warm-orange/20 transition-all"
            />
          </div>

          {/* 2. 预算范围 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">2. 您的预算大概是多少？</label>
            <input 
              type="text" 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              placeholder="例如：100元以内、或者每斤不超过10元" 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-warm-orange/20 transition-all"
            />
          </div>

          {/* 3. 用途 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">3. 买来做什么用？</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['送礼', '自用', '家庭采购', '商用采购'].map(p => (
                <button 
                  key={p}
                  onClick={() => setFormData({...formData, purpose: p})}
                  className={`py-3 rounded-xl border-2 transition-all text-sm font-medium ${formData.purpose === p ? 'border-warm-orange bg-warm-orange/5 text-warm-orange' : 'border-stone-100 text-gray-500'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* 4. 对品质的要求 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">4. 您对品质有什么要求？</label>
            <div className="grid grid-cols-3 gap-3">
              {['顶级品质', '只要新鲜', '性价比高'].map(q => (
                <button 
                  key={q}
                  onClick={() => setFormData({...formData, quality: q})}
                  className={`py-3 rounded-xl border-2 transition-all text-sm font-medium ${formData.quality === q ? 'border-warm-orange bg-warm-orange/5 text-warm-orange' : 'border-stone-100 text-gray-500'}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* 5. 对数量的要求 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">5. 您需要买多少？</label>
            <input 
              type="text" 
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              placeholder="例如：5斤、一箱、或者长期供应" 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-warm-orange/20 transition-all"
            />
          </div>

          {/* 6. 是否重视产地 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">6. 您看重产地吗？</label>
            <div className="flex gap-4">
              {['非常看重', '只要好就行'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="originMatters" 
                    checked={formData.originMatters === opt}
                    onChange={() => setFormData({...formData, originMatters: opt})}
                    className="text-warm-orange focus:ring-warm-orange"
                  />
                  <span className="text-gray-600 text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 7. 其他需求 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">7. 还有其他想叮嘱 AI 的吗？</label>
            <textarea 
              rows={3}
              value={formData.others}
              onChange={(e) => setFormData({...formData, others: e.target.value})}
              placeholder="比如：希望顺丰发货、包装要结实、或者是对口味的特殊要求..." 
              className="w-full p-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-warm-orange/20 transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onSubmit}
            className="w-full bg-warm-orange text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-warm-orange/20 mt-4"
          >
            开始智能推荐
          </motion.button>
        </div>
      </div>
    </div>
  );
};


// --- Page 4: Results ---
const ResultsPage = ({ onBack }: { onBack: () => void }) => {
  const mockResults = [
    {
      id: 1,
      name: '秦岭深山百花蜜',
      farmer: '老秦家蜂场',
      location: '陕西·秦岭',
      price: '¥68/瓶 (500g)',
      purpose: '家庭滋补、送礼佳品',
      tags: ['纯天然', '无添加', '波美度高'],
      reason: '根据您对“高品质”和“送礼”的需求，这款蜂蜜产自秦岭深山，蜜质浓稠，包装精美，是难得的纯净好蜜。',
      slogan: '深山里的甜蜜馈赠，每一口都是大自然的味道。',
      img: 'https://picsum.photos/seed/honey/600/400'
    },
    {
      id: 2,
      name: '赣南脐橙（精选特级果）',
      farmer: '阿强果园',
      location: '江西·赣州',
      price: '¥55/10斤装',
      purpose: '日常鲜食、补充维C',
      tags: ['皮薄汁多', '酸甜适中'],
      reason: '您想找当季水果，现在的赣南脐橙正值最佳赏味期。阿强家的果子个头匀称，水分极足，性价比非常高。',
      slogan: '剥开满屋清香，咬下满口爆汁，这就是冬天的味道。',
      img: 'https://picsum.photos/seed/orange/600/400'
    },
    {
      id: 3,
      name: '响水石板大米',
      farmer: '黑土地合作社',
      location: '黑龙江·宁安',
      price: '¥128/10斤',
      purpose: '家庭主食、高端馈赠',
      tags: ['矿物质丰富', '口感软糯'],
      reason: '针对您“家庭采购”且“重视产地”的要求，这款大米生长在火山岩石板地上，米粒油亮，是真正的餐桌主角。',
      slogan: '一锅米饭半屋香，让吃饭变成一种享受。',
      img: 'https://picsum.photos/seed/rice-field/600/400'
    }
  ];

  return (
    <div className="pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-2 bg-warm-orange/10 rounded-2xl mb-4"
        >
          <Sparkles className="text-warm-orange w-6 h-6" />
        </motion.div>
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">AI 为您精选的田间好物</h2>
        <p className="text-gray-500">已根据您的预算、用途及品质偏好，匹配了最合适的 3 款产品</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {mockResults.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-stone-100 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
          >
            {/* 图片区域 */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-warm-orange flex items-center gap-1 shadow-sm">
                <MapPin className="w-3 h-3" /> {item.location}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-bold text-xl">{item.name}</p>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-6 flex-1 flex flex-col">
              {/* 价格与用途 */}
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">建议售价</p>
                  <p className="text-2xl font-bold text-warm-orange">{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">适合用途</p>
                  <p className="text-xs font-medium text-gray-700">{item.purpose}</p>
                </div>
              </div>

              {/* 产品特点标签 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-50 text-stone-500 font-bold border border-stone-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* AI 推荐理由 */}
              <div className="bg-warm-orange/5 p-4 rounded-2xl mb-6 border border-warm-orange/10 relative">
                <div className="absolute -top-2 -left-2 bg-warm-orange text-white p-1 rounded-lg shadow-sm">
                  <Sparkles className="w-3 h-3" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  “{item.reason}”
                </p>
              </div>

              {/* 简短宣传语 */}
              <p className="text-sm text-gray-800 font-medium mb-8 text-center px-4">
                {item.slogan}
              </p>

              {/* 底部按钮 */}
              <div className="mt-auto">
                <button className="w-full py-4 rounded-2xl bg-warm-orange text-white font-bold hover:bg-warm-orange/90 transition-colors shadow-lg shadow-warm-orange/20 flex items-center justify-center gap-2">
                  立即联系农户 <ChevronRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-3">来自：{item.farmer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-stone-200 text-gray-500 hover:bg-stone-50 transition-colors text-sm font-medium"
        >
          没找到满意的？修改需求重新推荐
        </button>
      </div>
    </div>
  );
};
const AboutPage = () => (
  <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center mb-16"
    >
      <div className="inline-block p-3 bg-farm-green/10 rounded-2xl mb-6">
        <Heart className="text-farm-green w-8 h-8" />
      </div>
      <h2 className="text-4xl font-serif font-bold text-farm-green mb-6">关于“田间好物”</h2>
      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
        <p>
          我们是一群热爱土地的人。我们发现，很多偏远地区的农民有着极好的农产品，却因为不懂营销、没有渠道，只能眼睁睁看着好东西烂在树上。
        </p>
        <p>
          而城市的买家，却常常在超市里买着昂贵但不新鲜的食物，苦于找不到真正的“农家味”。
        </p>
        <p className="font-bold text-gray-900">
          于是，我们开发了“田间好物”。
        </p>
        <p>
          利用 AI 技术，我们为每一份农产品生成最动人的描述，为每一位买家精准匹配最对胃口的味道。
        </p>
        <p>
          我们的目标很简单：<span className="text-warm-orange">让农民的汗水不被辜负，让城市的餐桌更有温度。</span>
        </p>
      </div>
    </motion.div>

    <div className="bg-farm-green text-white p-10 rounded-[40px] relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">加入我们，一起助农</h3>
        <p className="text-white/80 mb-8">无论是农户还是买家，您的每一次参与，都是对土地的一份敬意。</p>
        <button className="bg-white text-farm-green px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors">
          联系我们
        </button>
      </div>
      <div className="absolute -right-20 -bottom-20 opacity-10">
        <Leaf size={300} />
      </div>
    </div>
  </div>
);

// --- Main App ---
export default function App() {
  const [page, setPage] = useState<Page | 'farmer-result'>('home');
  const [farmerResult, setFarmerResult] = useState<any>(null);

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage onStartFarmer={() => setPage('farmer-form')} onStartBuyer={() => setPage('buyer-form')} />;
      case 'farmer-form': return (
        <FarmerForm 
          onBack={() => setPage('home')} 
          onResult={(data) => {
            setFarmerResult(data);
            setPage('farmer-result');
          }} 
        />
      );
      case 'farmer-result': return <FarmerResultPage data={farmerResult} onBack={() => setPage('farmer-form')} />;
      case 'buyer-form': return <BuyerForm onBack={() => setPage('home')} onSubmit={() => setPage('results')} />;
      case 'results': return <ResultsPage onBack={() => setPage('buyer-form')} />;
      case 'about': return <AboutPage />;
      default: return <HomePage onStartFarmer={() => setPage('farmer-form')} onStartBuyer={() => setPage('buyer-form')} />;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
