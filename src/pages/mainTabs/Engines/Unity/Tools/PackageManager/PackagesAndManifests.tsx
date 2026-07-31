import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
