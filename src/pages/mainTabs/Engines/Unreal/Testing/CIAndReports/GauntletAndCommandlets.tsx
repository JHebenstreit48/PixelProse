import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GauntletAndCommandlets = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/CIAndReports/GauntletAndCommandlets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gauntlet & Commandlets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GauntletAndCommandlets;
