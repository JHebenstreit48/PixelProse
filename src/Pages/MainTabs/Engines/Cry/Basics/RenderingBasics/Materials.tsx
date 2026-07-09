import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
