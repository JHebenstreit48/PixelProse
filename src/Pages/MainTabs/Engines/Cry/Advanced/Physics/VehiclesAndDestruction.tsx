import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VehiclesAndDestruction = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Physics/VehiclesAndDestruction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vehicles & Destruction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VehiclesAndDestruction;
