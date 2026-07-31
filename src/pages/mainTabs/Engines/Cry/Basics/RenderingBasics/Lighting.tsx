import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
