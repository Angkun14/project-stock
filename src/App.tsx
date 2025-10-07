import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="app-root">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">CSMJU</a>

          {/* ปุ่มเมนูมือถือ */}
          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span />
          </button>

          {/* เมนูนำทาง */}
          <nav
            className={`nav ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <a href="#">หน้าแรก</a>
            <a href="#">บทความ</a>
            <a href="#">เกี่ยวกับเรา</a>
            <a href="#">ติดต่อเรา</a>
            <a className="cta" href="#">
              เข้าสู่ระบบ
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1>ระบบจัดการคลังสินค้า และ ระบบจัดการออเดอร์</h1>
              <p>
                ผู้ให้บริการระบบบริหารจัดการคลังสินค้าออนไลน์สำหรับเจ้าของคลัง
                และระบบจัดการออเดอร์สำหรับร้านค้าออนไลน์ ลดเวลาทำงานและเพิ่ม
                ประสิทธิภาพด้วยระบบเรียลไทม์
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn primary">ดูบริการของเรา</a>
                <a href="#" className="btn">ติดต่อเรา</a>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="https://oasys.co.th/wp-content/uploads/2023/10/Warehouse-Management-System-Oasys-768x576.png"
                alt="OASYS WMS"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services container">
          <h2>บริการของเรา</h2>
          <div className="grid">
            <article className="card-svc">
              <img
                src="https://oasys.co.th/wp-content/uploads/2023/10/icon-1-295x300.png"
                alt="WMS"
              />
              <h3>ระบบจัดการคลังสินค้า</h3>
              <p>
                จัดการสต๊อกสินค้า เช็กสต๊อกได้เรียลไทม์ เชื่อมต่อ API กับแพลตฟอร์มต่างๆ
              </p>
              <a href="/our-services/wms/">คลิกดูเพิ่มเติม</a>
            </article>

            <article className="card-svc">
              <img
                src="https://oasys.co.th/wp-content/uploads/2023/10/Order-Management-System-768x576.png"
                alt="OMS"
              />
              <h3>ระบบจัดการออเดอร์</h3>
              <p>
                จัดการออเดอร์ ดูแลร้านค้าออนไลน์ รวมแชทและพิมพ์ปะหน้าขนส่งจากระบบ
              </p>
              <a href="/our-services/oms/">คลิกดูเพิ่มเติม</a>
            </article>

            <article className="card-svc">
              <img
                src="https://oasys.co.th/wp-content/uploads/2024/03/MIND-MAP-oasys-01-1024x496.png"
                alt="Integration"
              />
              <h3>เชื่อมต่อระบบแบบไร้รอยต่อ</h3>
              <p>
                รองรับ API เชื่อมต่อกับแพลตฟอร์มขายและระบบขนส่งหลากหลาย
              </p>
            </article>
          </div>
        </section>
  <footer className="site-footer">
  <div className="container footer-inner">
    <div className="footer-brand">
      <h3>CSMJU</h3>
      <p>
        ระบบบริหารจัดการคลังสินค้าและออเดอร์ออนไลน์  
        ช่วยให้ธุรกิจของคุณทำงานได้อย่างมีประสิทธิภาพ
      </p>
    </div>

    <div className="footer-links">
      <h4>เมนูหลัก</h4>
      <ul>
        <li><a href="#">หน้าแรก</a></li>
        <li><a href="#">บริการของเรา</a></li>
        <li><a href="#">เกี่ยวกับเรา</a></li>
        <li><a href="#">ติดต่อเรา</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>ติดต่อเรา</h4>
      <p>มหาวิทยาลัยแม่โจ้<br />เชียงใหม่ 50290</p>
      <p>โทร: 053-000000</p>
      <p>อีเมล: info@csmju.ac.th</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} CSMJU. All rights reserved.</p>
  </div>
</footer>


      </main>
    </div>
  )
}

export default App
