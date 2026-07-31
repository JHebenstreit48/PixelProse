import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PlatformsAndTargets = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/BuildAndPackage/PlatformsAndTargets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Platforms & Targets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformsAndTargets;
