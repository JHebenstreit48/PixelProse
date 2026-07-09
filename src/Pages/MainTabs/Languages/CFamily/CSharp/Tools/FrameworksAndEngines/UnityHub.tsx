import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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