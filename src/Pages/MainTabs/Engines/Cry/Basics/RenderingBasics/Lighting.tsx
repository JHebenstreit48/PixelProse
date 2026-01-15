import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lighting = () => {
  const markdownFilePath = 'Engines/Cry/Basics/RenderingBasics/Lighting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lighting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lighting;
