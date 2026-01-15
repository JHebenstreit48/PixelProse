import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlatformsAndTargets = () => {
  const markdownFilePath = 'Engines/Cry/Tools/BuildAndPackage/PlatformsAndTargets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Platforms & Targets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformsAndTargets;
