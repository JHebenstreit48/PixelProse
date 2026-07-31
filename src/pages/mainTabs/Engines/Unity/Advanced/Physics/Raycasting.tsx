import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Raycasting = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Physics/Raycasting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Raycasting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Raycasting;
