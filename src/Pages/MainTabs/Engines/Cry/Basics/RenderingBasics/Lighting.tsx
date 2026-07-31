import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Lighting = () => {
  const markdownFilePath = 'Engines/Cry/Basics/RenderingBasics/Lighting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lighting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lighting;
