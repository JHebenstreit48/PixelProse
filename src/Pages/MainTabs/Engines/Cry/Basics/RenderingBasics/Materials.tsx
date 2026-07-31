import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Materials = () => {
  const markdownFilePath = 'Engines/Cry/Basics/RenderingBasics/Materials';

  return (
    <>
      <PageLayout>
        <PageTitle title="Materials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Materials;
