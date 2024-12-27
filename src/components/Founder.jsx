import founder from "../assets/images/founder.jpg";

const Paragraph = ({ children, className }) => {
  return (
    <p className={className} style={{ marginBottom: "1rem" }}>
      {children}
    </p>
  );
};

const Founder = () => {
  return (
    <section className="section">
      <div className="has-text-centered">
        <img className="circle" src={founder} alt="Founder" />
        <Paragraph className="title is-2">
          Venerable Aloysius Schwartz
        </Paragraph>
        <Paragraph className="subtitle is-5">
          (September 18, 1930 - March 16, 1992)
        </Paragraph>
        <Paragraph className="title is-spaced is-5">Founder</Paragraph>
        <div className="container">
          <Paragraph className="subtitle is-6 has-text-justified">
            The Servant of God, Venerable Aloysius Schwartz, was born in
            Washington, D.C., on September 18, 1930, to Louis Schwartz and
            Cedelia Bourassa. He grew up with the idea of becoming a priest, and
            over time, this idea became more specific: he would become a secular
            priest, work as a missionary, and dedicate his apostolate to the
            poor and the needy.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            In 1944, he entered St. Charles Seminary in Maryland. He completed
            his B.A. degree at Maryland College and then joined the Societe des
            Auxiliares des Missions (S.A.M.), studying theology at Louvain
            Catholic University in Belgium. During his first visit to the shrine
            of the Virgin of The Poor, he felt inspired to dedicate his
            priesthood to serving the poor in fulfillment of the messages of Our
            Lady.In 1994, he entered in St. Charles Seminary in Maryland. He
            finished his B.A. Degree at Maryland College and then he joined with
            Societe des Auxiliares des Mission (S.A.M.) and studied his theology
            at Louvine Catholic University in Belgium. He used to spend his
            vacation helping at the rag-picker’s camp. During his first visit to
            the shrine of the Virgin of The Poor, he felt inspired to dedicate
            his priesthood to the service of the poor, in fulfilment of the
            messages of our lady.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            He was ordained as a diocesan priest on June 29, 1957 at St. Martin
            church, Washington D.C. and he chose Korea as his first assignment
            although he was told that he might not be able to persevere because
            of his somewhat delicate health. On December 8, 1957, he arrived at
            Korea. As a consequence of the Korean War, there were many widows,
            orphans, beggars and street children. Almost on-half of the adult
            population was without productive employment and reduced to selling
            rags and waste paper, begging and stealing as a last resort. He
            thanked God that after thirteen (13) years of preparation; finally
            he arrived at the place where he serve him through the poorest of
            the poor.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            He was full of zeal and worked so hard but one day he collapsed
            while saying mass and was diagnosed to have hepatitis. His recovery
            was slow so he was advised to go back to the United States. Without
            money for his plane fare, he had to beg transportation from an
            American ship. While in the United States, he decided to make an
            effort to raise funds for the Korean poor. He made mission appeals
            at parish masses on Sundays. He didn’t mind the role of a beggar to
            be able to help the poor.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            In December 1961, he returned to Korea and was assigned as a pastor
            of St. Joseph parish. He lived like the poor people around the
            parish and continued helping the needy. He organized the Legion of
            Mary Ladies to assist in helping the poor. Later, through divine
            inspiration, he thought that in order to serve the poor in the mind
            and heart of Jesus, they must be consecrated.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            He founded the religious Congregation of the Sisters of Mary on
            August 15, 1964 in Amnamdong, Busan and on May 10, 1981the Brothers
            of Christ. As a founder, he was an excellent model of genuine
            service to the poor, which emanates from his unwavering faith and
            love of God present in the Eucharist, in the scriptures, in others
            especially in the poor. And his zeal for God and for the poor is
            also incarnated in the sisters and brothers hearts. They established
            Boystown and Girlstown to take care, educate and give a bright
            future to the orphans, street children from the very poor families
            from day one to their late teens. They also build hospitals and
            sanatoriums for very indigent patients; hospices for the homeless
            and disabled elderly men, special children and unwed mothers. They
            are also involved in pro-life activities. His idea of helping the
            poor is not mainly material but above all spiritual. He always
            wanted to give the best service to the poor and to offer as many
            souls to God and to be Blessed Virgin.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            In 1983, he receive the Ramon Magsaysay Award for his excellent
            Charity works in Korea and for the first time, he came in Manila. In
            1985, seeing the urgent need of the poor specially the children and
            through the invitation of his Eminence Jaime Cardinal Sin and his
            total trust in God’s providence, he started a new religious
            community in Archdiocese of Manila. Thus, expanding his charity
            works in the Philippines. Construction of buildings and rounding of
            children from the slum and very poor areas were done and in few
            months they launch to work. In 1988, he received the Mother Teresa
            Award from the Manila Jaycees in Manila. In 1989, he was invited by
            his Eminence, Ricardo Cardinal Vidal to establish his charity
            programs in Cebu. At present, they are taking care and educating
            almost 12,000 boys and girls who are coming from different provinces
            of our country. They are being provided with food, clothing,
            shelter, high quality education with intensive vocational training
            totally free-of-charge in preparation for a bright future at their
            Sisters of Mary Boystown and Girlstown Schools in Adlas and Biga,
            Silang, Cavite; Talisay and Minglanilla, Cebu and Brothers of Christ
            of Banneux, Inc. in General Trias City and Amadeo, Cavite catering
            Out of School Youth, Physically and Mentally challenged and Elderly.
          </Paragraph>
          <Paragraph className="subtitle is-6 has-text-justified">
            In 1989, he was diagnosed to have terminal illness. Amyotrophic
            Lateral Sclerosis (ALS), which he accepted with much joy, serenity
            and courage as a gift from God. He suffered excruciating due to his
            illness yet he smiledand cracked jokes to make others happy. In
            spite of his deteriorating health, he established Boystown and
            Girlstown in Mexico, which he called his “unfinished symphony”.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Founder;
