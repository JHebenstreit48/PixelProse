import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const UnityHub = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/UnityHub';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Unity Hub" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default UnityHub;