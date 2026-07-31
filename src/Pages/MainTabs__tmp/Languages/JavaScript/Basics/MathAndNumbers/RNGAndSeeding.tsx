import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const RNGAndSeeding = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/MathAndNumbers/RNGAndSeeding';

  return (
    <>
      <PageLayout>
        <PageTitle title="RNG & Seeding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNGAndSeeding;
