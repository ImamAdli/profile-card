import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';

// Convert images to base64
const convertImageToBase64 = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/jpeg');
      resolve(dataURL);
    };
    img.onerror = (error) => {
      console.error('Error loading image:', error);
      // Return a placeholder or default image
      resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MEM0My4zMTM3IDQwIDQ2IDM3LjMxMzcgNDYgMzRDNDYgMzAuNjg2MyA0My4zMTM3IDI4IDQwIDI4QzM2LjY4NjMgMjggMzQgMzAuNjg2MyAzNCAzNEMzNCAzNy4zMTM3IDM2LjY4NjMgNDAgNDAgNDBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik00MCA1MkMzMi4yNjg5IDUyIDI2IDQ1LjczMTEgMjYgMzhIMTRDMTQgNDUuNzMxMSAyMC4yNjg5IDUyIDI4IDUySDQwWiIgZmlsbD0iIzlCOUJBMCIvPgo8L3N2Zz4K');
    };
    img.src = imagePath;
  });
};

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 25,
    borderBottom: '2 solid #2563eb',
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 25,
    border: '3 solid #2563eb',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    color: '#2563eb',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIcon: {
    fontSize: 10,
    marginRight: 6,
    color: '#2563eb',
    fontWeight: 'bold',
    backgroundColor: '#dbeafe',
    padding: '2 6',
    borderRadius: 3,
  },
  contactText: {
    fontSize: 11,
    color: '#6b7280',
    fontWeight: 'normal',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  intro: {
    fontSize: 12,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillItem: {
    backgroundColor: '#f3f4f6',
    padding: '6 12',
    borderRadius: 6,
    marginBottom: 6,
    border: '1 solid #e5e7eb',
  },
  skillText: {
    fontSize: 10,
    color: '#374151',
    fontWeight: 'medium',
  },
  projectsGrid: {
    gap: 15,
  },
  projectCard: {
    border: '1 solid #e5e7eb',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 10,
    lineHeight: 1.4,
  },
  projectImage: {
    width: '100%',
    height: 120,
    objectFit: 'cover',
    borderRadius: 4,
    marginBottom: 8,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  techTag: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '4 8',
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 'medium',
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1 solid #e5e7eb',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#9ca3af',
  },
  projectLink: {
    marginTop: 10,
    paddingTop: 10,
    borderTop: '1 solid #e5e7eb',
  },
  linkText: {
    fontSize: 9,
    color: '#2563eb',
    textDecoration: 'underline',
  },
});

// Portfolio Document Component
const PortfolioDocument = ({ profileImageBase64 }) => (
  <Document>
    {/* Page 1 - Personal Information */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            src={profileImageBase64} 
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Imam Adli S.Kom</Text>
            <Text style={styles.title}>Junior Web Developer</Text>
            <View style={styles.contactGrid}>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>•</Text>
                <Text style={styles.contactText}>Jakarta, Indonesia</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>•</Text>
                <Text style={styles.contactText}>System Information Graduate</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>•</Text>
                <Text style={styles.contactText}>Open to Work</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>•</Text>
                <Text style={styles.contactText}>15+ Web Projects</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.intro}>
          A passionate Junior Web Developer with hands-on experience in PHP frameworks like Laravel. 
          Currently expanding my expertise into React JS, I combine strong problem-solving abilities 
          with a quick learning mindset. I thrive usually work independently but open to collaborative 
          environments, consistently delivering projects on time. Eager to contribute and grow while 
          bringing technical skills and enthusiasm for continuous learning to innovative projects.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>HTML (Advanced)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>CSS (Advanced)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>JavaScript (Intermediate)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>PHP (Advanced)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>Laravel (Intermediate)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>CodeIgniter (Basic)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>ReactJS (Basic)</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>MySQL (Intermediate)</Text>
          </View>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact & Social</Text>
        <View style={styles.contactGrid}>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>GITHUB</Text>
            <Text style={styles.contactText}>https://github.com/ImamAdli/</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>LINKEDIN</Text>
            <Text style={styles.contactText}>https://www.linkedin.com/in/imam-adli/</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>EMAIL</Text>
            <Text style={styles.contactText}>imamimamimam717@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>WHATSAPP</Text>
            <Text style={styles.contactText}>+62 899 0096 343</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2 - Featured Projects */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        <View style={styles.projectsGrid}>
          {/* Project 1 */}
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Employee Attendance with QR Code</Text>
            <Text style={styles.projectDescription}>
              An employee attendance system featuring QR code generation, check-in/out functionality, 
              attendance with photo capture and history tracking, and an admin dashboard for attendance management.
            </Text>
            <View style={styles.techStack}>
              <Text style={styles.techTag}>Laravel</Text>
              <Text style={styles.techTag}>MySQL</Text>
              <Text style={styles.techTag}>Bootstrap</Text>
              <Text style={styles.techTag}>JavaScript</Text>
            </View>
            <View style={styles.projectLink}>
              <Text style={styles.linkText}>GitHub: https://github.com/ImamAdli/Employee-Attendance-with-QR-Code</Text>
            </View>
          </View>

          {/* Project 2 */}
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Boarding House Booking System</Text>
            <Text style={styles.projectDescription}>
              A vanilla PHP boarding house booking system with a user-friendly interface for easy 
              navigation and booking management, and an admin dashboard for managing bookings and users.
            </Text>
            <View style={styles.techStack}>
              <Text style={styles.techTag}>HTML</Text>
              <Text style={styles.techTag}>PHP</Text>
              <Text style={styles.techTag}>Bootstrap</Text>
              <Text style={styles.techTag}>jQuery</Text>
            </View>
            <View style={styles.projectLink}>
              <Text style={styles.linkText}>GitHub: https://github.com/ImamAdli/Website-Manajemen-Rumah-Kost</Text>
            </View>
          </View>

          {/* Project 3 */}
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Profile Website</Text>
            <Text style={styles.projectDescription}>
              My Profile Page with ReactJS and TailwindCSS
            </Text>
            <View style={styles.techStack}>
              <Text style={styles.techTag}>ReactJS</Text>
              <Text style={styles.techTag}>TailwindCSS</Text>
            </View>
            <View style={styles.projectLink}>
              <Text style={styles.linkText}>GitHub: https://github.com/ImamAdli/profile-card</Text>
            </View>
          </View>

          {/* Project 4 */}
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>University Extracurricular Management System</Text>
            <Text style={styles.projectDescription}>
              A vanilla PHP university extracurricular system featuring a user-friendly homepage and 
              an admin dashboard for managing news, document submissions, financial records, and extracurricular registrations.
            </Text>
            <View style={styles.techStack}>
              <Text style={styles.techTag}>PHP</Text>
              <Text style={styles.techTag}>Bootstrap</Text>
              <Text style={styles.techTag}>SCSS</Text>
              <Text style={styles.techTag}>jQuery</Text>
            </View>
            <View style={styles.projectLink}>
              <Text style={styles.linkText}>GitHub: https://github.com/ImamAdli/UKM-System</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Main function to generate and download PDF
export const generatePortfolioPDF = async () => {
  try {
    // Convert images to base64
    const profileImageBase64 = await convertImageToBase64(process.env.PUBLIC_URL + '/assets/imam.jpg');
    
    // Create the PDF document
    const doc = (
      <PortfolioDocument 
        profileImageBase64={profileImageBase64}
      />
    );

    // Generate PDF blob
    const blob = await pdf(doc).toBlob();
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Imam-Adli-Portfolio.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
