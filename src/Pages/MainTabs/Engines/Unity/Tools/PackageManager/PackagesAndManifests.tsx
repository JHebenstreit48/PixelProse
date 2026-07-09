import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PackagesAndManifests = () => {
  const markdownFilePath = 'Engines/Unity/Tools/PackageManager/PackagesAndManifests';

  return (
    <>
      <PageLayout>
        <PageTitle title="Packages & Manifests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackagesAndManifests;
