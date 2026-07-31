import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildCookPackage = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/BuildAndPackage/BuildCookPackage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build/Cook/Package" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildCookPackage;
