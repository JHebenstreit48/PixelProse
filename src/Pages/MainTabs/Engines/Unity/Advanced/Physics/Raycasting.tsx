import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
