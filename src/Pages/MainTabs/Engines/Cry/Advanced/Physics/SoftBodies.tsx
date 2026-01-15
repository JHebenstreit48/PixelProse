import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SoftBodies = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Physics/SoftBodies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Soft Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SoftBodies;
