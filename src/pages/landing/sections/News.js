import React, { useEffect } from "react";
import NewsImage from "assets/images/image__216_.png";
import NewsCard from "components/landing/sections/NewsCard";
import MainLayout from "layout/main";

const newsArr = [
  {
    title:
      "PKRD Releases Letters Shared With The U.S. Senate Committee On Banking, Housing, And Urban Affairs And The U.S. House Financial Services Committee",
    description:
      "Following recent initiatives to promote blockchain innovation in Georgia, PKRD today announced that it has invested an undisclosed amount into the Series-A investment round of Academy of Digital Industries",
    date: "23 December 2023",
    image: NewsImage,
    content: `
   
    Founded in June 2018, the Academy of Digital Industries is built around the concept of online workshops and masterclasses that are carefully crafted to promote self-development and skillset growth. Using innovative approaches to learning that move beyond traditional educational courses, the Academy of Digital Industries has seen a consistent annual increase in student enrollment, boasting nearly 20,000 graduates and delivering close to 1,900 classes. Subject matters that the Academy offers in its learning classes include cutting-edge Design, Engineering/programming, Marketing and Business related courses Microsoft certification, financial modeling, graphic design, information technology, UI/UX design, programming, SEO optimization, and more.

    
    "PKRD is a strong believer in financial freedom, freedom of communications, and freedom of education. High quality, accessible, and unbiased education is one of the most important pillars for the future of humanity”. said Paolo Ardoino, CEO of PKRD. “Our ongoing investments into general and domain-specific education spanning across hundreds of disciplines and geographies, are congruent with PKRD’s long-term goals of championing financial freedom and innovation across the globe. PKRD is thrilled to collaborate with the Academy of Digital Industries, whose innovations are significantly increasing access to this crucial education in Georgia, with plans to expand rapidly globally. Our shared vision is to bridge knowledge gaps, making information, technology, payments, and communication more accessible and understood, and ultimately drive their global adoption."

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.
    
    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    This collaboration is a testament to PKRD's dedication to education, further solidifying its position as a leader in the blockchain industry. By joining forces with the Academy of Digital Industries, PKRD has taken a significant step toward building a more inclusive and educated digital future.


    `,
  },
  {
    title: " PKRD Makes Investment into the Academy of Digital Industries",
    description:
      "Following recent initiatives to promote blockchain innovation in Georgia, PKRD today announced that it has invested an undisclosed amount into the Series-A investment round of Academy of Digital Industries",
    date: "23 December 2023",
    image: NewsImage,
    content: `
    Founded in June 2018, the Academy of Digital Industries is built around the concept of online workshops and masterclasses that are carefully crafted to promote self-development and skillset growth. Using innovative approaches to learning that move beyond traditional educational courses, the Academy of Digital Industries has seen a consistent annual increase in student enrollment, boasting nearly 20,000 graduates and delivering close to 1,900 classes. Subject matters that the Academy offers in its learning classes include cutting-edge Design, Engineering/programming, Marketing and Business related courses Microsoft certification, financial modeling, graphic design, information technology, UI/UX design, programming, SEO optimization, and more.

    "PKRD is a strong believer in financial freedom, freedom of communications, and freedom of education. High quality, accessible, and unbiased education is one of the most important pillars for the future of humanity”. said Paolo Ardoino, CEO of PKRD. “Our ongoing investments into general and domain-specific education spanning across hundreds of disciplines and geographies, are congruent with PKRD’s long-term goals of championing financial freedom and innovation across the globe. PKRD is thrilled to collaborate with the Academy of Digital Industries, whose innovations are significantly increasing access to this crucial education in Georgia, with plans to expand rapidly globally. Our shared vision is to bridge knowledge gaps, making information, technology, payments, and communication more accessible and understood, and ultimately drive their global adoption."

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    This collaboration is a testament to PKRD's dedication to education, further solidifying its position as a leader in the blockchain industry. By joining forces with the Academy of Digital Industries, PKRD has taken a significant step toward building a more inclusive and educated digital future.


    `,
  },
  {
    title:
      "PKRD Releases Letters Shared With The U.S. Senate Committee On Banking, Housing, And Urban Affairs And The U.S. House Financial Services Committee",
    description:
      "Following recent initiatives to promote blockchain innovation in Georgia, PKRD today announced that it has invested an undisclosed amount into the Series-A investment round of Academy of Digital Industries",
    date: "23 December 2023",
    image: NewsImage,
    content: `
    Founded in June 2018, the Academy of Digital Industries is built around the concept of online workshops and masterclasses that are carefully crafted to promote self-development and skillset growth. Using innovative approaches to learning that move beyond traditional educational courses, the Academy of Digital Industries has seen a consistent annual increase in student enrollment, boasting nearly 20,000 graduates and delivering close to 1,900 classes. Subject matters that the Academy offers in its learning classes include cutting-edge Design, Engineering/programming, Marketing and Business related courses Microsoft certification, financial modeling, graphic design, information technology, UI/UX design, programming, SEO optimization, and more.

    "PKRD is a strong believer in financial freedom, freedom of communications, and freedom of education. High quality, accessible, and unbiased education is one of the most important pillars for the future of humanity”. said Paolo Ardoino, CEO of PKRD. “Our ongoing investments into general and domain-specific education spanning across hundreds of disciplines and geographies, are congruent with PKRD’s long-term goals of championing financial freedom and innovation across the globe. PKRD is thrilled to collaborate with the Academy of Digital Industries, whose innovations are significantly increasing access to this crucial education in Georgia, with plans to expand rapidly globally. Our shared vision is to bridge knowledge gaps, making information, technology, payments, and communication more accessible and understood, and ultimately drive their global adoption."

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    This collaboration is a testament to PKRD's dedication to education, further solidifying its position as a leader in the blockchain industry. By joining forces with the Academy of Digital Industries, PKRD has taken a significant step toward building a more inclusive and educated digital future.


    `,
  },
  {
    title:
      "PKRD Releases Letters Shared With The U.S. Senate Committee On Banking, Housing, And Urban Affairs And The U.S. House Financial Services Committee",
    description:
      "Following recent initiatives to promote blockchain innovation in Georgia, PKRD today announced that it has invested an undisclosed amount into the Series-A investment round of Academy of Digital Industries",
    date: "23 December 2023",
    image: NewsImage,
    content: `
    Founded in June 2018, the Academy of Digital Industries is built around the concept of online workshops and masterclasses that are carefully crafted to promote self-development and skillset growth. Using innovative approaches to learning that move beyond traditional educational courses, the Academy of Digital Industries has seen a consistent annual increase in student enrollment, boasting nearly 20,000 graduates and delivering close to 1,900 classes. Subject matters that the Academy offers in its learning classes include cutting-edge Design, Engineering/programming, Marketing and Business related courses Microsoft certification, financial modeling, graphic design, information technology, UI/UX design, programming, SEO optimization, and more.

    "PKRD is a strong believer in financial freedom, freedom of communications, and freedom of education. High quality, accessible, and unbiased education is one of the most important pillars for the future of humanity”. said Paolo Ardoino, CEO of PKRD. “Our ongoing investments into general and domain-specific education spanning across hundreds of disciplines and geographies, are congruent with PKRD’s long-term goals of championing financial freedom and innovation across the globe. PKRD is thrilled to collaborate with the Academy of Digital Industries, whose innovations are significantly increasing access to this crucial education in Georgia, with plans to expand rapidly globally. Our shared vision is to bridge knowledge gaps, making information, technology, payments, and communication more accessible and understood, and ultimately drive their global adoption."

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    This collaboration is a testament to PKRD's dedication to education, further solidifying its position as a leader in the blockchain industry. By joining forces with the Academy of Digital Industries, PKRD has taken a significant step toward building a more inclusive and educated digital future.


    `,
  },
  {
    title: " PKRD Makes Investment into the Academy of Digital Industries",
    description:
      "Following recent initiatives to promote blockchain innovation in Georgia, PKRD today announced that it has invested an undisclosed amount into the Series-A investment round of Academy of Digital Industries",
    date: "23 December 2023",
    image: NewsImage,
    content: `
    Founded in June 2018, the Academy of Digital Industries is built around the concept of online workshops and masterclasses that are carefully crafted to promote self-development and skillset growth. Using innovative approaches to learning that move beyond traditional educational courses, the Academy of Digital Industries has seen a consistent annual increase in student enrollment, boasting nearly 20,000 graduates and delivering close to 1,900 classes. Subject matters that the Academy offers in its learning classes include cutting-edge Design, Engineering/programming, Marketing and Business related courses Microsoft certification, financial modeling, graphic design, information technology, UI/UX design, programming, SEO optimization, and more.

    "PKRD is a strong believer in financial freedom, freedom of communications, and freedom of education. High quality, accessible, and unbiased education is one of the most important pillars for the future of humanity”. said Paolo Ardoino, CEO of PKRD. “Our ongoing investments into general and domain-specific education spanning across hundreds of disciplines and geographies, are congruent with PKRD’s long-term goals of championing financial freedom and innovation across the globe. PKRD is thrilled to collaborate with the Academy of Digital Industries, whose innovations are significantly increasing access to this crucial education in Georgia, with plans to expand rapidly globally. Our shared vision is to bridge knowledge gaps, making information, technology, payments, and communication more accessible and understood, and ultimately drive their global adoption."

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    In addition to announcing this partnership, PKRD also completed its first educational program in the country of Georgia titled “Mastering The Blockchain,” which was created in collaboration with the Academy of Digital Industries, as well as the Georgian Agency for Innovation and Technology (GITA) and Business and Technology University. This three-week intensive course taught Georgian and foreign students about the fundamentals of Bitcoin, blockchain, and peer-to-peer technologies, as well as their impact on both traditional and decentralized finance.

    This collaboration is a testament to PKRD's dedication to education, further solidifying its position as a leader in the blockchain industry. By joining forces with the Academy of Digital Industries, PKRD has taken a significant step toward building a more inclusive and educated digital future.


    `,
  },
];

const NewsPage = () => {

  useEffect(()=>{
    document.title = "PKRD - News"
  },[])

  return (
    <MainLayout>
      <div className=" text-center pt-5 pb-5 sm:pt-20 sm:pb-10 rounded-md md:pl-[15%] md:pb-20 md:text-left bg-[#f9fbf9]">
        <p className=" md:text-6xl text-3xl">
          <span className="custom-heading">News</span>
        </p>
      </div>
      <div className=" pb-10 grid grid-cols-1 md:grid-cols-2  sm:mx-10 gap-10 bg-[#f9fbf9] px-2 sm:px-[5%] md:px-[9%] lg:px-[12%] xl:px-[15%] md:mx-0 md:pt-20 ">
        {newsArr.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            image={news.image}
            description={news.description}
            date={news.date}
            content={news.content}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default NewsPage;
