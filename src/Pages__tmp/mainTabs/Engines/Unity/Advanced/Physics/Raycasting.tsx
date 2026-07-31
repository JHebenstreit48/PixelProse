import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
