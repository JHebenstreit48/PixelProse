import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APKVsAAB = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/AndroidFundamentals/APKVsAAB';

  return (
    <>
      <PageLayout>
        <PageTitle title="APK vs AAB" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APKVsAAB;
