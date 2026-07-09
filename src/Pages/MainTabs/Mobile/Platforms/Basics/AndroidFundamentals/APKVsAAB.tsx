import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
