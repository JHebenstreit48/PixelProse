import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SoftBodies = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Physics/SoftBodies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Soft Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SoftBodies;
