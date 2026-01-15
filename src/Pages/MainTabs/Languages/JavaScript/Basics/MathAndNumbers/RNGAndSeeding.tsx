import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNGAndSeeding = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/MathAndNumbers/RNGAndSeeding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RNG & Seeding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNGAndSeeding;
