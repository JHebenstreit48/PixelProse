import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
